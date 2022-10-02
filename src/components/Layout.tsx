import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <h1>Movies</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
