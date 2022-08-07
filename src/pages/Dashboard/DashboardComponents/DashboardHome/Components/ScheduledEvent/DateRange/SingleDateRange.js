import { format } from 'date-fns';
import React from 'react';
import useDate from '../../../../../../../hooks/useDate';
import useRange from '../../../../../../../hooks/useRange';
import event from '../../../../../../../media/images/dashboard/scheduled events/event.svg'

const SingleDateRange = () => {
    const [date, setDate] = useDate();
    const [range, setRange] = useRange();
    return (
        <div>
            <p className='text-lg font-medium border-slate-300 border-b-2'>{format(date, "PP")}-{format(range, "PP")}</p>
            <div className='mt-16 text-center'>
                <img className='flex justify-center items-center m-auto' src={event} alt="" />
                <h1 className='text-lg py-2 font-medium'>No Events in This Range</h1>
            </div>
        </div>


    );
};

export default SingleDateRange;