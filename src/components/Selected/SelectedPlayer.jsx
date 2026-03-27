import React from 'react';
import RenderSelect from './RenderSelect';
import EmptyRender from './EmptyRender';


const SelectedPlayer = ({selectPlayer}) => {
    console.log(selectPlayer);
    
    return (
        <>
        <div className=''>
                {
            selectPlayer.length>0 ? selectPlayer.map(player =>< RenderSelect player={player}></RenderSelect> ) : <EmptyRender></EmptyRender>
          }
        </div>
          
          
        </>
    );
};

export default SelectedPlayer;