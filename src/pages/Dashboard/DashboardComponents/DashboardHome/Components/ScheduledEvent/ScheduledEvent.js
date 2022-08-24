import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import event from "../../../../../../media/images/dashboard/scheduled events/event.svg";
import DateRange from "./DateRange/DateRange";
import Pdf from 'react-to-pdf';
// const ref = React.createRef();
const ScheduledEvents = () => {
  const ref = React.createRef();
  const { dateRange, setDateRange } = useState(null);
  return (
    <div ref={ref} >
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
                </li>
              </ul>
            </div>
            <ul className="navbar-end">
              <li>
                <Pdf targetRef={ref} filename="Scheduled.pdf">
                  {({ toPdf }) => (
                    <button onClick={toPdf}>Export</button>
                  )}
                </Pdf>
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
