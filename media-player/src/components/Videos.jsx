import React, { useEffect, useState } from 'react'
import VideoCard from '../components/VideoCard'
import { getVideos } from '../services/allApi'

function Videos({addStatus}) {

  const [allVideos, setAllVideos] = useState([])

  useEffect(()=>{
    getdata()
  },[addStatus])

  const getdata = async () => {

    const res=await getVideos()
    // console.log(res.data)
    setAllVideos(res.data)
    // console.log(allVideos)
  } 

  return (
    <div className='bg-primary row  border border-6  border-dark p-7' style={{ borderRadius: 10 }}>
      {allVideos.map(item=>(
      <VideoCard video={item} />

      ))}


    </div>
  )
}

export default Videos
