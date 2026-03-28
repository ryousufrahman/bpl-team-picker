import React from "react";

const RenderSelect = ({ player , selectPlayer ,setSelectPlayer , coin , setCoin }) => {

  const handledDelete =(player )=>{
    const deletePlayer = selectPlayer.filter(deletepl => deletepl.playerName =! player.playerName)
    setSelectPlayer(deletePlayer)
    const newBalance = coin + player.playerPrice
    setCoin(newBalance)

  }


  return (
    <>
    <div className="flex justify-between items-center p-5 rounded-2xl border-2 border-gray-500 mt-5 w-full">
      <div className="flex items-center gap-4">
           <img src={player.playerImg} alt="" className="w-20" />
           <div>
            <h2>{player.playerName}</h2>
            <p>{player.playerFormat}</p>
           </div>

      </div>
      <button className="btn" onClick={()=>handledDelete(player)}>Delete</button>
     
    </div>
    </>
  );
};

export default RenderSelect;
