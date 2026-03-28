import React from 'react';
import RenderSelect from './RenderSelect';
import EmptyRender from './EmptyRender';


const SelectedPlayer = ({selectPlayer , setSelectPlayer, coin , setCoin}) => {
    console.log(selectPlayer);
    
    return (
        <>
        <div className='lg:w-[1300px]'>
                {
            selectPlayer.length>0 ? selectPlayer.map(player =>< RenderSelect player={player} selectPlayer ={selectPlayer} setSelectPlayer={setSelectPlayer} coin ={coin} setCoin ={setCoin}></RenderSelect> ) : <EmptyRender></EmptyRender>
          }
        </div>
          
          
        </>
    );
};

export default SelectedPlayer;