import React from 'react';
import Feature from './Feature';

const PowerfulFeatures = () => {
    const features = [
        {
            "icon": "https://i.ibb.co/9wvtnkF/reminder.png",
            "name": "Reduce no shows with reminders",
            "description": "Automatic reminders and notifications significantly reduce no show and admin works",
        },
        {
            "icon": "https://i.ibb.co/9wvtnkF/reminder.png",
            "name": "Scheduling for the whole team",
            "description": "Automatic reminders and notifications significantly reduce no show and admin works",
        },
        {
            "icon": "https://i.ibb.co/9wvtnkF/reminder.png",
            "name": "Reduce no shows with reminders",
            "description": "Automatic reminders and notifications significantly reduce no show and admin works",
        },
        {
            "icon": "https://i.ibb.co/9wvtnkF/reminder.png",
            "name": "Reduce no shows with reminders",
            "description": "Automatic reminders and notifications significantly reduce no show and admin works",
        },
        {
            "icon": "https://i.ibb.co/9wvtnkF/reminder.png",
            "name": "Reduce no shows with reminders",
            "description": "Automatic reminders and notifications significantly reduce no show and admin works",
        },
        {
            "icon": "https://i.ibb.co/9wvtnkF/reminder.png",
            "name": "Reduce no shows with reminders",
            "description": "Automatic reminders and notifications significantly reduce no show and admin works",
        },

    ]
    return (
        <div>
            <h1 className='text-2xl font-medium mt-10'>Powerful Feature</h1>
            <p className='py-5'>Simple,easy to use features to help automate scheduling with yours customers</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 px-60'>
                {
                    features.map(feature => <Feature
                        feature={feature}
                    ></Feature>)
                }
            </div>
        </div>
    );
};

export default PowerfulFeatures;