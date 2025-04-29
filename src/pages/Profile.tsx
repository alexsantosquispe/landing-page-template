import { useNavigate } from "react-router-dom";

import { Button } from "../components/Button";
import { useAuth } from "../context/useAuth";

export const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const logoutHandler = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h1>Profile</h1>
      <h4>Welcome {user?.name}</h4>
      <Button onClick={logoutHandler} label="Logout" />
    </div>
  );
};
