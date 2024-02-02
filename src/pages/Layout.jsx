import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar";

function Layout() {
  return (
    <>
      <main>
        <NavBar />
        <div className="main-content">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
