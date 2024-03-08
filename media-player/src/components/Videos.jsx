import React, { useEffect, useState } from 'react'
import VideoCard from '../components/VideoCard'
import { getVideos } from '../services/allApi'

function Videos({addStatus}) {

  const [allVideos, setAllVideos] = useState([])
  const [delStatus,setDeleteStatus]=useState({})

  useEffect(()=>{
    getdata()
  },[addStatus,delStatus])

  const getdata = async () => {

    const res=await getVideos()
    // console.log(res.data)
    setAllVideos(res.data)
    // console.log(allVideos)
  } 

  return (
    <div className='bg-primary row  border border-6  border-dark p-5' style={{ borderRadius: 10,width:'900px' }}>
      {allVideos.map(item=>(
      <VideoCard video={item}  setDeleteStatus={setDeleteStatus}/>

      ))}


    </div>
  )
}

export default Videos
