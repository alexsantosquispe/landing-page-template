import { Link, Outlet } from 'react-router-dom';

export const Products = () => {
  return (
    <div className="flex w-full flex-col gap-8 p-8">
      <input
        id="search"
        type="search"
        className="w-[20rem] rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        placeholder="Search Products"
      />

      <nav className="flex gap-4">
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </div>
  );
};
