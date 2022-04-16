import React from 'react';

const Loading = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='rounded-full my-4 w-12 h-12 border-dashed border-4 animate-spin border-orange-500 ring-4 ring-offset-2 ring-offset-yellow-200 ring-teal-400'>
            </div>
            <h1 className='font-bold'>Loading...</h1>
        </div>
    );
};

export default Loading;