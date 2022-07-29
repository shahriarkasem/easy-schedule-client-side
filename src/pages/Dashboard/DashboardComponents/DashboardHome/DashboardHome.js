import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const DashboardHome = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="flex justify-between mt-12 mb-6">
        <h2 className="text-2xl ">My Schedule</h2>
        <button onClick={() => navigate('/dashboard/event-type')} className="button-orange-border-h40">+ Create</button>
      </div>

      <div class="navbar bg-base-100 overflow-x-auto border-b-2 drop-shadow-lg">
        <div class="navbar-center">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to="/dashboard/d-home/event-types">Event Types</Link>
            </li>
            <li>
              <Link to="/dashboard/d-home/scheduled">Scheduled Events</Link>
            </li>
            <li>
              <Link to="/dashboard/d-home/workflows">Workflows</Link>
            </li>
            <li>
              <Link to="/dashboard/d-home/routing">Routing Forms</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardHome;
