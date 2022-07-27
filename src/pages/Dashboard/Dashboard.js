import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const navItem = (
    <>
      <li>
        <Link to="/dashboard/d-home">Home</Link>
      </li>
      <li>
        <Link to="/dashboard/availability">Availability</Link>
      </li>
      <li>
        <Link to="/dashboard/integration">Integrations</Link>
      </li>
      <li>
        <Link to="/dashboard/help">Help</Link>
      </li>
      <li>
        <Link to="/dashboard/account">Account</Link>
      </li>
    </>
  );

  return (
    <div className="lg:px-52 md:px-28 px-10">
      <div class="navbar bg-base-100">
        <div class="w-10 rounded-full">
          <img src="https://i.ibb.co/QnJPG33/easy-Schedule-Icon.jpg" alt="" />
        </div>
        <Link to="/" class="btn btn-ghost normal-case text-xl">
          Easy Schedule
        </Link>
        <div class="navbar-end">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{navItem}</ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
