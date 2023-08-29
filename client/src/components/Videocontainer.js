import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from '../utils/contants'
import Videocard from './Videocard';

const Videocontainer = () => {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
     getVideos();
  },[]);
async function getVideos(){
     const data=await fetch(YOUTUBE_VIDEOS_API)
     const json=await data.json();
     console.log(json)
     setVideos(json.items)
  }
  return (
    <div className='flex'>
      {videos.map((video) => (
      <Videocard key={video.id} info={video} />
    ))}
    </div>
  )
}

export default Videocontainer;