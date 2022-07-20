import React from 'react';
import ready from '../../../../media/images/feature/ready.png'

const ReadySignup = () => {
    return (
        <div className='my-10 bg-green-400 grid grid-cols-2 items-center mx-48 rounded'>
            <div className=''>
                <h1 className='font-medium text-2xl'>Ready? Let's go</h1>
                <p>7-days trial, no credit card required, no strings attached.</p>
                <button className='btn btn-black'>SignUp</button>
            </div>
            <div>
                <img src={ready} alt="" />
            </div>
        </div>
    );
};

export default ReadySignup;