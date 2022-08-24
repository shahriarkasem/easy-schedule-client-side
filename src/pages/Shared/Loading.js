import React from 'react';
import LoadingAnimate from './LoadingAnimate';

const Loading = () => {
    return (
        <div className="">
        <div className="flex items-center justify-center h-48">
            <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    </div>
    );
};

export default Loading;