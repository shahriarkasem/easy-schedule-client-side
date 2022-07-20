import React from 'react';
import ready from '../../../../media/images/feature/ready.png'

const ReadySignup = () => {
    return (
        <div className='mt-44 mb-10 bg-green-400 grid grid-cols-2 items-center lg:mx-52 rounded-lg'>
            <div className=''>
                <h1 className='font-medium text-2xl'>Ready? Let's go</h1>
                <p className='py-2'>7-days trial, no credit card required, no strings attached.</p>
                <button className='btn btn-black'>SignUp</button>
            </div>
            <div>
                <img className='-mt-32' src={ready} alt="" />
            </div>
        </div>
    );
};

export default ReadySignup;