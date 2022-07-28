import React from 'react';
import event from '../../../../../../../media/images/dashboard/scheduled events/event.svg'

const Pending = () => {
    return (
        <div className='mt-16 text-center'>
            <img className='flex justify-center items-center m-auto' src={event} alt="" />
            <h1 className='text-lg py-2 font-medium'>No Pending Events</h1>
        </div>
    );
};

export default Pending;