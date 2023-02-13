import { useEffect, useContext, createContext, useMemo } from "react";
import axios from "axios";
// import { ErrorContent, FullPageSpinner } from "components";
import { useState } from "react";
import { useCallback } from "react";

// const { useAsync } = require("utils/hooks");

const AuthContext = createContext();
AuthContext.displayName = "AuthContext";

export default function AuthProvider(props) {
  const [user, setUser] = useState();

  const [token] = useState(localStorage.getItem("USER_ACCESS_TOKEN"));

  useEffect(() => {
    // retrieve user from last session or cache

    const autoLogin = async () => {
      console.log("running auto login");
      let userData = null;

      if (!token) {
        return;
      }

      userData = await axios.get("/ad/profile/me").catch((e) => {
        return null;
      });

      console.log("userData", userData);
      // setUser(userData);
    };
    autoLogin();
  }, [token]);

  const login = useCallback(
    async (details) => {
      const result = await axios.post("/auth/login/", {
        method: "post",
        data: details,
      });

      console.log("result", result);

      setUser(result);
      localStorage.setItem("USER_ACCESS_TOKEN", result.tokens.access);
      localStorage.setItem("USER_REFRESH_TOKEN", result.tokens.refresh);
      return details;
    },
    [setUser]
  );

  const logout = useCallback(() => {
    return Promise.all([
      setUser(null),
      localStorage.removeItem("USER_ACCESS_TOKEN"),
      localStorage.removeItem("USER_REFRESH_TOKEN"),
    ]);
  }, [setUser]);

  // const updateUser = useCallback(
  //   (data) => {
  //     setUser({ ...user, ...data });
  //   },
  //   [setUser]
  // );

  const value = useMemo(() => ({ user, login, logout }), [login, logout, user]);

  return <AuthContext.Provider value={value} {...props} />;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}
