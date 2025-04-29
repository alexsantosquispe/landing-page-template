import "./App.css";

import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const LazyAboutPage = lazy(() => import("./pages/About"));

import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/AuthProvider";
import { Admin } from "./pages/Admin";
import { ContactPage } from "./pages/Contact";
import { FeaturedProducts } from "./pages/FeaturedProducts";
import { HomePage } from "./pages/Home";
import { Login } from "./pages/Login";
import { NewProducts } from "./pages/NewProducts";
import { NotFound } from "./pages/NotFound";
import { Products } from "./pages/Products";
import { Profile } from "./pages/Profile";
import { Purchase } from "./pages/Purchase";
import { UserDetail } from "./pages/UserDetail";
import { Users } from "./pages/Users";

function App() {
  return (
    <AuthProvider>
      <div className="flex w-full flex-col">
        <Navbar />
        <main className="mt-[3.75rem] flex w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="about"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyAboutPage />
                </Suspense>
              }
            />
            <Route path="contact" element={<ContactPage />} />
            <Route path="purchase" element={<Purchase />} />
            <Route path="products" element={<Products />}>
              <Route index element={<FeaturedProducts />} />
              <Route path="featured" element={<FeaturedProducts />} />
              <Route path="new" element={<NewProducts />} />
            </Route>
            <Route path="users" element={<Users />}>
              <Route path=":userId" element={<UserDetail />} />
              <Route path="admin" element={<Admin />} />
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
