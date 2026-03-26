import React, { use } from 'react';
import Player from './Player';

const Players = ({fetchPlayer}) => {
    const data = use(fetchPlayer);
    console.log(data);
    
   
    

    return (
       <>
         <div className='mt-5'> 
            

         </div>
         <div className='grid  grid-cols-1 p-3 gap-4 md:grid-cols-2 lg:grid-cols-4'>
            {
                data.map(ply => <Player key={ply.id} ply ={ply}></Player>)
            }
         </div>
       
       </>
    );
};

export default Players;