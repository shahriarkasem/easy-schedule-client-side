import React, { useState } from 'react';

const Booking = () => {
    const [todayBooking, setTodayBooking] = useState(48805);
    const [monthBooking, setMonthBooking] = useState(1040870);
    const [allTimeBooking, setAllTimeBooking] = useState(81166964);

    return (
        <div>
            <div>
                <h2 className='font-semibold md:text-2xl'>We handle 1000's of bookings for our users every single day</h2>
            </div>
        </div>
    );
};

export default Booking;