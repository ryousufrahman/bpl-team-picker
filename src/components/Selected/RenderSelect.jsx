import React from "react";

const RenderSelect = ({ player }) => {
  return (
    <>
      <div className="flex flex-col">
        <h1>{player.playerName}</h1>
      </div>
    </>
  );
};

export default RenderSelect;
