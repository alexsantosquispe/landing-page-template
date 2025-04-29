import { Outlet, useSearchParams } from "react-router-dom";

import { Button } from "../components/Button";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <div className="flex flex-col gap-4">
      <div>User 1</div>
      <div>User 2</div>
      <div>User 3</div>

      <Outlet />

      <div className="flex gap-2">
        <Button
          label="Active users"
          onClick={() => setSearchParams({ filter: "active" })}
        />
        <Button label="Reset filters" onClick={() => setSearchParams({})} />
      </div>
      {showActiveUsers ? (
        <h2>Showing active users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
    </div>
  );
};
