import React from "react";

const Player = ({ply}) => {
  return (
    <>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img
            src={ply.playerImg}
            alt="Shoes" className="h-40 w-fit "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{ply.playerName}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
