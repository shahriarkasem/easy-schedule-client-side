import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../../firebase.init";
import useAdmin from "../../../../hooks/useAdmin";
import DarkContext from "../../../DarkMode/DarkContext";
import "./Navbar.css";

const Navbar = () => {
  const { handleDarkMode, toggle, setToggle } = useContext(DarkContext);
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  // console.log(admin);
  const navItem = (
    <>
      <li>
        <Link to="/features">
          <span
            className={"" + (toggle === true ? "text-black" : "text-white")}
          >
            Features
          </span>
        </Link>
      </li>
      <li>
        <Link to="/pricing">
          <span
            className={"" + (toggle === true ? "text-black" : "text-white")}
          >
            Pricing
          </span>
        </Link>
      </li>
      <li>
        <Link to="/blog">
          <span
            className={"" + (toggle === true ? "text-black" : "text-white")}
          >
            Blog
          </span>
        </Link>
      </li>
      {user && (
        <li>
          <Link to="/chat">
            <span
              className={"" + (toggle === true ? "text-black" : "text-white")}
            >
              Meetings
            </span>
          </Link>
        </li>
      )}
      {admin && (
        <li>
          <Link to="/adminDashboard">
            <span
              className={"" + (toggle === true ? "text-black" : "text-white")}
            >
              Admin Dashboard
            </span>
          </Link>
        </li>
      )}

      {/* dark mode toggle */}
      <p
        className={
          "flex items-center justify-center my-4 block md:hidden" +
          (toggle === true ? "" : "")
        }
      >
        {toggle === true ? (
          <p className="flex items-center">
            <input onClick={handleDarkMode} type="checkbox" class="toggle" />
          </p>
        ) : (
          <p className="flex items-center">
            <input
              onClick={handleDarkMode}
              type="checkbox"
              class="toggle toggle-accent"
              checked
            />
          </p>
        )}
      </p>
    </>
  );

  return (
    <div className="mx-auto">
      <div
        class={
          "navbar " +
          (toggle === true ? "bg-base-100 lg:px-28" : "bg-slate-800 lg:px-32")
        }
      >
        <div class="navbar-start">
          <div class="dropdown">
            <label
              tabindex="0"
              class={
                "btn btn-ghost lg:hidden mr-2 md:mr-5" +
                (toggle === true ? "" : " bg-accent btn-outline btn rounded")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class={"h-5 w-5"}
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
              class={
                toggle === true
                  ? "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  : "menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-700 rounded-box w-52"
              }
            >
              {navItem}
            </ul>
          </div>
          <div class={"w-10 rounded-full"}>
            <img
              className="rounded-xl"
              src="https://i.ibb.co/QnJPG33/easy-Schedule-Icon.jpg"
              alt=""
            />
          </div>
          <Link to="/" class={"btn btn-ghost normal-case text-xl"}>
            <span className={toggle === true ? "text-black" : "text-white"}>
              Easy Schedule
            </span>
          </Link>
        </div>
        <div class={"navbar-center hidden lg:flex"}>
          <ul class={"menu menu-horizontal p-0"}>{navItem}</ul>
        </div>
        <div class="navbar-end" >

          {/* dark mode toggle */}
          <p
            className={
              "flex items-center px-2 md:px-4 lg:px-6 hidden md:block" +
              (toggle === true ? "" : "")
            }

          >
            {toggle === true ? (
              <p className="flex items-center">
                <input
                  onClick={handleDarkMode}
                  type="checkbox"
                  class="toggle"
                />
              </p>
            ) : (
              <p className="flex items-center">
                <input
                  onClick={handleDarkMode}
                  type="checkbox"
                  class="toggle toggle-accent"
                  checked
                />
              </p>
            )}
          </p>
          {user ? (
            <Link
              to="/dashboard/d-home/event-types"
              className="button-orange-border-h40"
            >
              <span>My Account</span>
            </Link>
          ) : (
            <Link to="/login" class="button-orange-border-h40">
              Login
            </Link>
          )}

          {/* <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
