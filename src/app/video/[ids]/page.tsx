"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = ({ params }) => {
  const router = useRouter();
  let {ids}=params
  return <div>{ids}</div>;
};

export default page;
