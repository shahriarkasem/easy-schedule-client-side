import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const DateRange = ({ setDateRange }) => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="date-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="date-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div className='flex'>
                        {/* <div class="card w-72 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <DayPicker
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate} />
                            </div>
                        </div> */}

                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate} />
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate} />
                    </div>
                    <div class="modal-action">
                        <label for="date-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DateRange;