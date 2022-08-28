import React from 'react';
import useUserEvents from '../../../../../../../hooks/useUserEvents';
import event from '../../../../../../../media/images/dashboard/scheduled events/event.svg'
import UserEvents from '../../EventTypesComponents/UserEvents';

const Pending = () => {
    const ref = React.createRef();
    const { isLoading, error, userEvents } = useUserEvents();

    return (
        <div className='mt-16 text-center'>
            <div ref={ref}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 mt-5 md:mt-8">
                    {userEvents && userEvents.map((soloEvent, index) => (
                        <UserEvents
                            key={index}
                            soloEvent={soloEvent}
                        ></UserEvents>
                    ))}
                </div>
            </div>
            {/* <img className='flex justify-center items-center m-auto' src={event} alt="" />
            <h1 className='text-lg py-2 font-medium'>No Pending Events</h1> */}
        </div>
    );
};

export default Pending;