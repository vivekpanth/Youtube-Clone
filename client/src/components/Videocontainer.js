import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from '../utils/contants'
import Videocard from './Videocard';
import { Link } from 'react-router-dom';

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
    <div className='flex flex-wrap'>
      {videos.map((video) => (
      <Link  key={video.id}  to ={"/watch?v="+video.id}><Videocard info={video} /></Link>
    ))}
    </div>
  )
}

export default Videocontainer;