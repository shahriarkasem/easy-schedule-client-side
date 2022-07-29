import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
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
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" alt="" />
          </div>
        </label>
        <ul
          tabindex="0"
          class="mt-3 p-4 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-60"
        >
          <Link className="p-2" to="/accountSetting">
            Account Settings
          </Link>
          <Link className="p-2" to="/admin-management">
            Admin Management
          </Link>
          <Link className="p-2" to="/apps">
            Apps
          </Link>
          <Link className="p-2" to="/dashboard/billing">
            Billings
          </Link>
          <Link className="p-2" to="/dashboardHome">
            Dashboard Home
          </Link>
          <Link className="p-2" to="/Help">
            Help
          </Link>
          <Link className="p-2" to="/integrations">
            Integrations
          </Link>
          <Link className="p-2" to="/dashboard">
            Dashboard
          </Link>
          {user ? (
            <Link
              to="/"
              className="button-orange-border-h40"
              onClick={handleSignOut}
            >
              Logout
            </Link>
          ) : (
            <Link to="/login" class="button-orange-border-h40">
              Login
            </Link>
          )}
        </ul>
      </div>
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
