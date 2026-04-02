import React from "react";
import { FaUser ,  FaFlag } from "react-icons/fa";


const Player = ({ply ,coin , setCoin , selectPlayer , setSelectPlayer}) => {
  
   const dublicate = selectPlayer.find(pp=> pp.id === ply.id)
   
    
  const handleSetCoin= ()=>{
    const newCoin = coin - ply.playerPrice
   
    if(newCoin<0){
      alert('not enough coin to buy this player');
      return;
    }
    
   
    if(!dublicate){
        
        setCoin(newCoin)
        setSelectPlayer([... selectPlayer , ply])

    }



  }
    
    
   
    
  
  return (
    <>
      <div className="card bg-base-100  shadow-sm ">
        <figure>
          <img
            src={ply.playerImg}
            alt="Shoes" className="h-40 w-fit "
          />
        </figure>
        <div className="card-body space-y-2">
           <div className="flex gap-2 items-center">
             <FaUser /> <h2 className="card-title">{ply.playerName}</h2>
           </div>
           <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <FaFlag />
                <p className="text-gray-500 font-bold">{ply.playerCountry}</p>
              </div>
            <button className="btn text-gray-500">{ply.playerFormat}</button>
           </div>
           <div className="divider"></div>
           <div className="flex justify-between font-bold ">
            <p>Rating</p>
            <p className="text-right text-gray-500">{ply.playerRating}</p>
           </div>
           <div className="flex justify-between font-bold ">
            <p>Plying Style</p>
            <p className="text-right text-gray-500">{ply.bowlingStyle}</p>

           </div>
          
          <div className="card-actions justify-between items-center">
            <p className="font-bold">Price : <span>{ply.playerPrice}</span></p>
            <button className={`btn text-gray-500 ${dublicate ? 'bg-green-500 ' : ''} `}onClick={handleSetCoin}
              disabled ={dublicate}
              >
              {dublicate  ? 'Selected' : 'Choose Player'}
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
