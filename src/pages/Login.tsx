import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/Button";
import { User } from "../context/AuthContext";
import { useAuth } from "../context/useAuth";

export const Login = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const loginHandler = () => {
    if (user) {
      login(user);
      navigate("/");
    }
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1>Login</h1>

      <div className="flex flex-col gap-4">
        <input
          id="name"
          type="text"
          className="w-[20rem] rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="name"
          onBlur={(event) => setUser({ name: event.target.value })}
        />
        <Button onClick={loginHandler} label="Login" />
      </div>
    </div>
  );
};
