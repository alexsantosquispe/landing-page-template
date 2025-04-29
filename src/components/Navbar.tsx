import { NavLink, NavLinkRenderProps } from "react-router-dom";

import { useAuth } from "../context/useAuth";

export const NavItem = ({ path, label }: { path: string; label: string }) => {
  const navLinkHandler = ({ isActive }: NavLinkRenderProps) =>
    isActive ? "text-indigo-600 font-semibold" : "";

  return (
    <NavLink className={navLinkHandler} to={path}>
      {label}
    </NavLink>
  );
};

export const Navbar = () => {
  const { user } = useAuth();

  return (
    <header className="fixed flex h-[3.75rem] w-full items-center border-b border-b-gray-100 bg-white/80 backdrop-blur-xs">
      <nav className="flex gap-8 p-4">
        <NavItem path="/" label="Home" />
        <NavItem path="/about" label="About" />
        <NavItem path="/contact" label="Contact" />
        <NavItem path="/products" label="Products" />

        {!user && <NavItem path="/login" label="Login" />}

        {user && <NavItem path="/profile" label="Profile" />}
      </nav>
    </header>
  );
};
