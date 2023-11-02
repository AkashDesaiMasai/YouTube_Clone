"use client";
import Image from "next/image";
import { categories } from "@/app/utils/constants";
import SideHeader from "../Components/SideHeader";
import GetData from "./utils/fetch";
import { useEffect, useState } from "react";
import Video from "../Components/Video";
export default function Home() {
  const [Selected, setSelected] = useState("New");
  const [data, setData] = useState([]);

  const req = async () => {
    const newdata = await GetData(`search?part=snippet&q=${Selected}`);
    setData(newdata);
  };

  console.log(data);
  useEffect(() => {
    req();
  }, [Selected]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:h-[92vh] border-r-2 border-stone-500">
        <SideHeader setSelected={setSelected} Selected={Selected} />
      </div>
      <div className=" w-full">
        <h1 className="font-bold text-3xl">
          {Selected} <span style={{ color: "#FC1503" }}>Videos</span>
        </h1>
        <div className="flex flex-wrap basis-1 justify-center">
          {data ? data.map((e: object) => <Video {...e} />) : "Loading..."}
        </div>
      </div>
    </div>
  );
}
