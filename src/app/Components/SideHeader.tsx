"use client";
import React from "react";
import { categories } from "../utils/constants";

const SideHeader = ({ Selected, setSelected }) => {
  //console.log(setSelected)
  return (
    <div className="flex flex-col   md:flex-row">
      <div className="flex md:flex-col overflow-auto ">
        {categories.map((e) => (
          <button
            onClick={(): void => setSelected(e.name)}
            className="side_Btn mx-2 my-1  rounded-full  px-8 py-2"
            style={{ background: (Selected == e.name && "#FC1503") || "" }}
          >
            {e.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideHeader;
