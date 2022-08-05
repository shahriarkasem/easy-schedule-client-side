import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import event from "../../../../../../media/images/dashboard/scheduled events/event.svg";
import DateRange from "./DateRange/DateRange";
const ScheduledEvents = () => {
  const { dateRange, setDateRange } = useState(null);
  return (
    <div>
      <h1 className="my-4 flex justify-end">Displaying 0 – 0 of 0 Events</h1>
      <div class="card mb-10 bg-teal-100 shadow-xl">
        <div class="card-body">
          <div class="navbar bg-base-100 overflow-x-auto">
            <div class="flex">
              <ul class="menu menu-horizontal p-0">
                <li>
                  <Link to="/dashboard/d-home/scheduled/upcoming">
                    Upcoming
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/d-home/scheduled/pending">Pending</Link>
                </li>
                <li>
                  <Link to="/dashboard/d-home/scheduled/past">Past</Link>
                </li>
                <li>
                  <label
                    For="date-modal"
                    onClick={setDateRange}
                    className="Link"
                  >
                    Date Rang
                  </label>
                  {<DateRange ></DateRange>}

                  {/* <Link to="/dashboard/d-home/scheduled/date">Date Range</Link> */}

                  {/* <Link to='/dashboard/d-home/scheduled/date'> <label for="date-modal" class="btn modal-button btn-sm">Date Rang</label></Link> */}
                </li>
                {/* <li className="flex justify-end menu-end" >
                                    <a href={event} download="Event scheduled export" className="">Export</a>
                                </li> */}
              </ul>
              {/* <ul class="menu menu-horizontal p-0">
                            <li >
                                    <a href={event} download="Event scheduled export" className="ml-96 pl-20">Export</a>
                                </li>
                            </ul> */}
            </div>
            <ul className="navbar-end">
              <li>
                <a href={event} download="Event scheduled export" className="">
                  Export
                </a>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ScheduledEvents;
