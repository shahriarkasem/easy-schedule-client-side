import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../../firebase.init";
import "./Navbar.css";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const [user] = useAuthState(auth);

  const navItem = (
    <>
      <li>
        <Link to="/">How It Works</Link>
      </li>
      <li>
        <Link to="/">Features</Link>
      </li>
      <li>
        <Link to="/">Individuals</Link>
      </li>
      <li>
        <Link to="/">Teams</Link>
      </li>
      <li>
        <Link to="/">Pricing</Link>
      </li>
      <li>
        <Link to="/">Resources</Link>
      </li>
    </>
  );

  return (
    <div className="container mx-auto">
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
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
          <div class="w-10 rounded-full">
            <img src="https://i.ibb.co/QnJPG33/easy-Schedule-Icon.jpg" alt="" />
          </div>
          <Link to="/" class="btn btn-ghost normal-case text-xl">
            Easy Schedule
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{navItem}</ul>
        </div>
        <div class="navbar-end">
          {user ? (
            <button
              onClick={() => signOut(auth)}
              className="btn btn-outline button-orange-border-h40"
            >
              Log Out
            </button>
          ) : (
            <Link to="/login" class="button-orange-border-h40">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
