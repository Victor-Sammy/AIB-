import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./AuthContext";

const queryClient = new QueryClient();
// {
//   defaultOptions: {
//     queries: {
//       retry: 2,
//     },
//   },
// }

export default function AppProviders({ children }) {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Router>
          <AuthProvider>{children}</AuthProvider>
        </Router>
      </QueryClientProvider>
    </React.StrictMode>
  );
}
