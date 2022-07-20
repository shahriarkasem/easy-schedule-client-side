import React, { useState } from 'react';

const Booking = () => {
    const [todayBooking, setTodayBooking] = useState(48805);
    const [monthBooking, setMonthBooking] = useState(1040870);
    const [allTimeBooking, setAllTimeBooking] = useState(81166964);

    return (
        <div>
            <div className="md:mx-20 lg:mx-36">
                <h2 className='font-semibold md:text-2xl text-center'>We handle 1000's of bookings for our users every single day</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-4">
                    <div className="mx-auto">
                        <h5 className="text-xl md:text-3xl lg:text-5xl font-bold text-lime-800 mt-3">{todayBooking}</h5>
                        <p className="text-lime-600 font-medium lg:text-xl mt-1 md:mt-2">Bookings today</p>
                    </div>
                    <div className="mx-auto">
                        <h5 className="text-xl md:text-3xl lg:text-5xl font-bold text-lime-800 mt-3">{monthBooking}</h5>
                        <p className="text-lime-600 font-medium lg:text-xl mt-1 md:mt-2">Bookings this month</p>
                    </div>
                    <div className="mx-auto">
                        <h5 className="text-xl md:text-3xl lg:text-5xl font-bold text-lime-800 mt-3">{allTimeBooking}</h5>
                        <p className="text-lime-600 font-medium lg:text-xl mt-1 md:mt-2">Bookings all time</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;