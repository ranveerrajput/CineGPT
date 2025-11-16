import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-16 absolute text-white z-10 mt-60">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className=" text w-1/4 pt-5">{overview}</p>
      <div className="py-10">
        <buttom className="bg-white text-black px-10 py-3 rounded hover:cursor-pointer font-bold">Play</buttom>
        <buttom className="bg-black text-white px-10 py-3 rounded mx-2 hover:cursor-pointer font-bold">More Info</buttom>
      </div>
    </div>
  );
};

export default VideoTitle;
