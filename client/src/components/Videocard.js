import React from 'react'

const Videocard = ({info}) => {
  const  {snippet,statistics}=info;
  
  const  {channelTitle,title,thumbnails}=snippet;

  return (
    <div className='p-2 m-2 w-60 shadow-lg'>
      <img className='rounded-lg' src={thumbnails.medium.url} alt="Thumbnail" />
      <ul>
        <li className='font-bold py-2' >{title}</li>
        <li>{channelTitle}</li> 
        <li>`{((statistics.viewCount)/1000000).toFixed(2)}M views</li>
      </ul>     

    </div>
  )
}

export default Videocard;