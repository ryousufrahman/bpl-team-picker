import React from "react";
import bgImg from "../../assets/bg-shadow.png";
import bannerImg from '../../assets/banner-main.png'

const Hero = () => {
  return (
    <>
      <div
        className="bg-black py-[64px] px-[10%] rounded-2xl m-4"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <img src={bannerImg} alt=""  className="mx-auto"/>
            <h2 className="mt-6 mb-6 text-2xl font-bold">
                Assemble Your Ultimate Dream 11 Cricket Team
            </h2>
            <button className="btn btn-outline btn-warning">Claim Free Credit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
