import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../../../../../../firebase.init';


// import event from '../../../../../../../media/images/dashboard/scheduled events/event.svg'
const Upcoming = () => {
    const [invites, setInvites] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`https://easyscheduler24.herokuapp.com/event/invited/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setInvites(data);
            })
    }, [user?.email])
    console.log(invites);
    return (


        // <div className="mt-12 md:mt-16 mb-5 md:mb-16">
        //     <div className=" p-5 md:p-16 lg:p-20 ">
        <div className='pt-6'>
            <div>
                <div className="text-center">
                    {
                        invites.map(invite => <div>
                            <p className='text-left'>{invite?.eventDate}</p>
                            <div class="divider w-full"></div>
                            <div className='flex my-3 justify-around bg-white p-5'>
                                <div className='pt-5'>
                                    <p>You are scheduled Type: {invite?.eventType}</p>

                                    <p className=" my-2">
                                        {/* {invite?.finalData?.inviteTime + ","} {' '} */}
                                        {invite.eventTime}
                                    </p>
                                </div>
                                <div>
                                    <p className="my-2">
                                        Meeting Host: {invite?.userEmail}
                                    </p>
                                    <p className="my-2">
                                        Guest's emails: {invite?.emails}
                                    </p>
                                    <h3 className="font-medium text-lg">
                                        Event Type: {invite.eventName}
                                    </h3>
                                </div>
                            </div>

                        </div>)
                    }

                </div>

            </div>
        </div>

        //     {/* <img className='flex justify-center items-center m-auto' src={event} alt="" />
        //     <h1 className='text-lg py-2 font-medium'>No Events Yet</h1>
        //     <h1>Share Event Type links to schedule events.</h1> */}
        //     <button onClick={() => navigate("/dashboard/d-home/event-types")} className="button-orange-border-h40 flex items-center justify-center m-auto my-4 btn-sm">View Event Types</button>
        // </div>
    );
};

export default Upcoming;