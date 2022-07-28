import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventTypesName = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Hello from event type</h1>
            <button className='btn btn-primary' onClick={() => navigate('/dashboard/event-type/one-on-one')}>One-On-One</button>
            <button className='btn btn-primary' onClick={() => navigate('/dashboard/event-type/group')}>Group</button>
        </div>
    );
};

export default EventTypesName;