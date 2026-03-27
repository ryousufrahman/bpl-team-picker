import React from "react";

const RenderSelect = ({ player }) => {
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
      <button className="btn">Delete</button>
     
    </div>
    </>
  );
};

export default RenderSelect;
