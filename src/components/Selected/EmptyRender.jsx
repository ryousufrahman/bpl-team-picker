import React from 'react';

const EmptyRender = ({setStatus}) => {
    return (
        <>
        <div className='flex justify-center flex-col gap-5'>
            <h2 className='text-center font-bold text-4xl '>Please Select your favourite Player</h2><br />
           <div className='flex justify-center'>
            <button className='btn bg-[#E7FE29] text-center' onClick={()=>setStatus('available')}>Choose your player</button>
            </div> 
        </div>
        </>
    );
};

export default EmptyRender;