import Image from "next/image";
import Link from "next/link";
import React from "react";

const Video = ({id:{videoId}, snippet,}) => {
  
   
 const demoVideoUrl="/video/GDa8kZLNhJ4";
  return (
    <div className="w-64 border-white rounded-lg m-5 h-84 max-h-96" >
      <Link href={videoId? `video/${videoId}`: demoVideoUrl}>
      <Image
        src={snippet.thumbnails.high.url}
        width={360}
        height={480}
        className="max-h-48"
        alt={snippet.title}
        />
      <h2 >{snippet.title.substring(0,75)||"Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI'"}</h2>
      <h1 className="text-l text-gray-500">{snippet.channelTitle.substring(0,25)}</h1>
      <p className="text-gray-500 text-s">{Math.floor(Math.random() * 100)}k views</p>
        </Link>
    </div>
  );
};

export default Video;
