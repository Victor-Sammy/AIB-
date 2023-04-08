import axios from "axios";
import { useMemo } from "react";
import { useAuth } from "../context/AuthContext";

export default function useClient() {
  const { user } = useAuth();
  const BASE_URL =
    import.meta.env.VITE_API_URL || "https://aib-shop.up.railway.app";
  axios.defaults.baseURL = BASE_URL;

  const client = useMemo(() => {
    const token = localStorage.getItem("USER_ACCESS_TOKEN");
    console.log("token", token);
    const authenticatedClient = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return token ? authenticatedClient : axios;
  }, [user]);

  return client;
}
