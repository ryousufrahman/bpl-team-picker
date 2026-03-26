import React, { use } from 'react';

const Players = ({fetchPlayer}) => {
    const data = use(fetchPlayer);
    console.log(data);
    
   
    

    return (
       <>
         <div className='mt-5'> 
            

         </div>
       
       </>
    );
};

export default Players;