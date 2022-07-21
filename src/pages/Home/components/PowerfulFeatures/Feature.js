import React from 'react';

const Feature = ({ feature }) => {
    const { name, description, icon } = feature;
    return (
        <div class="card w-80 md:w-60 bg-base-100 shadow-xl hover:bg-my-orange hover:text-my-default">
            <figure class="px-10 pt-10 flex justify-center">
                <img src={icon} alt="reminder icon" class="rounded-xl md:w-8 w-10" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="text-lg md:text-sm font-bold px-5">{name}</h2>
                <p className='my-5 md:text-sm'>{description}</p>
            </div>
        </div>
    );
};

export default Feature;