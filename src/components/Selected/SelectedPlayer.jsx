import React from "react";
import RenderSelect from "./RenderSelect";
import EmptyRender from "./EmptyRender";

const SelectedPlayer = ({
  selectPlayer,
  setSelectPlayer,
  coin,
  setCoin,
  setStatus,
}) => {
  const cartPrice = selectPlayer.reduce((total, item) => {
    return total + item.playerPrice;
  }, 0);
 const handleCartPurches =()=>{
   setSelectPlayer([])

 }
  return (
    <>
      <div className="lg:w-[1300px] flex flex-col gap-5 ">
        <div>
          {selectPlayer.length > 0 ? (
            selectPlayer.map((player) => (
              <RenderSelect
                player={player}
                selectPlayer={selectPlayer}
                setSelectPlayer={setSelectPlayer}
                coin={coin}
                setCoin={setCoin}
              ></RenderSelect>
            ))
          ) : (
            <EmptyRender setStatus={setStatus}></EmptyRender>
          )}
        </div>

        <div>
          {selectPlayer.length > 0 ? (
            <button
              onClick={handleCartPurches}
              className="btn btn-accent w-full mx-auto"
            >
              {" "}
              total Price ${cartPrice}
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default SelectedPlayer;
