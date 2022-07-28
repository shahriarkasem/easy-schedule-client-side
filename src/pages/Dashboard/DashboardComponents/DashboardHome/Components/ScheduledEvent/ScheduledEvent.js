import React from "react";
import { Link, Outlet } from "react-router-dom";

const ScheduledEvents = () => {
    return (
        <div>
            <h1 className="my-4 flex justify-end">Displaying 0 – 0 of 0 Events</h1>
            <div class="card mb-10 bg-teal-100 shadow-xl">
                <div class="card-body">
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
            </div>

        </div>
    );
};

export default ScheduledEvents;