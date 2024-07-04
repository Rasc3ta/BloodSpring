import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./paths.jsx";
import AuthProvider from "./Authentication/AuthProvider.jsx";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={routes}>
          <App></App>
        </RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
