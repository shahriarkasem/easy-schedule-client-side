import React from "react";
import { Link, Outlet } from "react-router-dom";

const ScheduledEvents = () => {
    return (
        <div>
            <div class="navbar bg-base-100 overflow-x-auto">
                <div class="navbar-center">
                    <ul class="menu menu-horizontal p-0">
                        <li>
                            <Link to="/dashboard/d-home/scheduled/upcoming">Upcoming</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/d-home/scheduled/pending">Pending</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/d-home/scheduled/past">Past</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/d-home/scheduled/date">Date Range</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default ScheduledEvents;