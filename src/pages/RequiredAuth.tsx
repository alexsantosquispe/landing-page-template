import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../context/useAuth";

export const RequiredAuth = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};
