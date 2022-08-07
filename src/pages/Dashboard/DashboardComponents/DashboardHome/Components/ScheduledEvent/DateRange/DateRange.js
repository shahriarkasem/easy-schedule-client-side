import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useNavigate } from "react-router-dom";
import useDate from "../../../../../../../hooks/useDate";
import useRange from "../../../../../../../hooks/useRange";
import SingleDateRange from "./SingleDateRange";
const DateRange = ({ setDateRange }) => {
    // const [date, setDate] = useState(new Date());
    const [date, setDate] = useDate();
    const [range, setRange] = useRange();
    const navigate = useNavigate();
    return (
        <div>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="date-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="bg-white p-5 rounded-xl">

                    <div className="flex">
                        <label
                            for="date-modal"
                            class="btn btn-sm btn-circle relative right-2 top-2"
                        >
                            ✕
                        </label>
                        {/* <div class="card w-72 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <DayPicker
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate} />
                            </div>
                        </div> */}

                        <div>
                            <DayPicker mode="single" selected={date} onSelect={setDate} />
                        </div>
                        <div>
                            <DayPicker mode="single"
                                selected={range}
                                onSelect={setRange} />
                        </div>
                    </div>
                    <p className='text-lg font-medium'>Selected date:{format(date, "PP")}-{format(range, "PP")}</p>


                    <div class="text-center">
                        <label for="date-modal" onClick={() => navigate('/dashboard/d-home/scheduled/date')} class="btn btn-sm">
                            Apply
                        </label>
                    </div>
                </div>
            </div>
            {/* <SingleDateRange
                date={date}
                range={range}>
            </SingleDateRange>
            <div>
                <h1>No events</h1>
            </div> */}
        </div>
    );
};

export default DateRange;
