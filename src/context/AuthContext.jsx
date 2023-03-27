import { useEffect, useContext, createContext, useMemo } from "react";
import axios from "axios";
// import { ErrorContent, FullPageSpinner } from "components";
import { useState } from "react";
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useLayoutEffect } from "react";

// const { useAsync } = require("utils/hooks");

const AuthContext = createContext();
AuthContext.displayName = "AuthContext";

export default function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);
  const queryClient = useQueryClient();

  const token = localStorage.getItem("USER_ACCESS_TOKEN");

  useLayoutEffect(() => {
    // retrieve user from last session or cache

    const autoLogin = async () => {
      let userData = null;
      
      if (!token) {
        return;
      }

      userData = await axios
        .get("/ad/profile/me/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .catch((e) => {
          logout();
          return null;
        });

      setUser({ id: userData.data.id, ...userData.data.user });
    };
    autoLogin()
      .catch((e) => {
        logout();
      })
      .finally(() => {
        setloading(false);
      });
  }, []);

  const login = useCallback(
    async (details) => {
      setloading(true);
      const result = await axios.post("/auth/login/", details);
      const cart = await axios.post(
        "/ad/carts/",
        {},
        {
          headers: {
            Authorization: `Bearer ${result.data.tokens.access}`,
          },
        }
      );

      setUser(result.data);
      localStorage.setItem("cartID", cart.data.id);
      localStorage.setItem("USER_ACCESS_TOKEN", result.data.tokens.access);
      localStorage.setItem("USER_REFRESH_TOKEN", result.data.tokens.refresh);

      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["notification"] });
      setloading(false);
      return result.data;
    },
    [setUser]
  );

  const logout = useCallback(() => {
    return Promise.all([
      setloading(true),
      setUser(null),
      localStorage.removeItem("USER_ID"),
      localStorage.removeItem("cartID"),
      localStorage.removeItem("USER_ACCESS_TOKEN"),
      localStorage.removeItem("USER_REFRESH_TOKEN"),
    ]).then(() => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["notification"] });
      setloading(false);
    });
  }, [setUser]);

  const register = useCallback((details) => {
    return axios.post("/auth/register/", details);
  }, []);

  // const updateUser = useCallback(
  //   (data) => {
  //     setUser({ ...user, ...data });
  //   },
  //   [setUser]
  // );

  const value = useMemo(
    () => ({ user, login, logout, register, loading }),
    [login, logout, user, register, loading]
  );

  return <AuthContext.Provider value={value} {...props} />;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}
