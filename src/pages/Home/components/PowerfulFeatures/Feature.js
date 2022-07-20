import React from 'react';

const Feature = ({ feature }) => {
    const { name, description, icon } = feature;
    return (
        <div class="card w-80 bg-base-100 shadow-xl hover:bg-orange-600 hover:text-white">
            <figure class="px-10 pt-10 flex justify-center">
                <img src={icon} alt="reminder icon" class="rounded-xl w-10" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="text-xl font-medium px-5">{name}</h2>
                <p className='my-5'>{description}</p>
            </div>
        </div>
    );
};

export default Feature;