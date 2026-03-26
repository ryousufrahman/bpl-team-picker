import React from "react";
import NavImg from '../../assets/logo.png'
import CoinImg from '../../assets/dollar1.png'

const Navbar = ({coin}) => {
  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl"><img src={NavImg} alt="" /></a>
        </div>
        <div className="flex-none">
          <div className="flex items-center gap-2 font-bold  border border-gray-200 px-3 py-2 rounded-2xl">
            <span>{coin}</span>
            <span>Coin</span>
            <img src={CoinImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
