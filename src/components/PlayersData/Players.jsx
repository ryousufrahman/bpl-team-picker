import React, { use, useState } from 'react';
import Player from './Player';

import SelectedPlayer from '../Selected/SelectedPlayer';

const Players = ({fetchPlayer , status, setStatus ,coin , setCoin}) => {
    const data = use(fetchPlayer);
    console.log(data);
    const [selectPlayer , setSelectPlayer] =useState([])
    
   
    

    return (
       <>
         <div className='mt-5 mb-5 flex justify-between p-4'> 
            <h2 className='font-bold text-2xl'>{status=="available" ? 'Available Players' : 'Selected Players'}</h2>
            <div>
                <button className={`btn rounded-r-none rounded-l-2xl ${status=='available' ? 'bg-[#E7FE29] font-bold' : ''}`} onClick={()=>setStatus('available')}>Available</button>
                <button className={`btn rounded-l-none rounded-r-2xl ${status=='select' ? 'bg-[#E7FE29] font-bold' : ''}`} onClick={()=>setStatus('select')} >Selected</button>
            </div>
            

         </div>
         <div className='grid  grid-cols-1 p-5 gap-4 md:grid-cols-2 lg:grid-cols-4'>
            {
              status ==="available" ? data.map(ply => <Player key={ply.id} ply ={ply} coin ={coin} setCoin={setCoin}selectPlayer={selectPlayer} setSelectPlayer={setSelectPlayer} ></Player>) : <SelectedPlayer selectPlayer ={selectPlayer} setSelectPlayer={setSelectPlayer}></SelectedPlayer>
            }
         </div>
       
       </>
    );
};

export default Players;