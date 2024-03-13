import React, { useEffect, useState } from 'react'
import { getCategory, deleteCategory, getSpecificVideo, updateCategory } from '../services/allApi'
import { toast } from 'react-toastify';
import VideoCard from './VideoCard';



function CategoryList({ addCatStatus }) {
  const [allCategory, setAllCategory] = useState([])
  const [delCategoryStatus, setDelCategorySatus] = useState({})

  // console.log(addCatStatus)

  useEffect(() => {
    getCat()

  }, [addCatStatus, delCategoryStatus])

  const getCat = async () => {
    const res = await getCategory()// get all data from db
    // console.log(res)
    setAllCategory(res.data)
    // console.log(res.data)
    // console.log(allCategory)
  }

  const handleDeleteCat = async (id) => {
    console.log(id)
    const res = await deleteCategory(id)
    console.log(res)
    if (res.status >= 200 && res.status < 300) {
      setDelCategorySatus(res)

      toast.success("Category Deleted Successfully!!!")
    } else {
      toast.error("Category Deletion Failed!!!")
    }
  }

  const handleDrop = async (e, id) => {
    // console.log("cat id"+id)
    const vid = e.dataTransfer.getData("videoid")
    // console.log("dropped video id"+vid)

    let category = allCategory.find(item => item.id == id)
    console.log(category)

    const res = await getSpecificVideo(vid)
    // console.log(res.data)
    category.video.push(res.data)
    console.log(category)

    const resCat = await updateCategory(category, id)
    console.log(resCat)
    if (resCat.status >= 200 && resCat.status < 300) {
      toast.success(`${res.data.caption} is added to ${category.categoryname}`)
      getCat()
    } else {
      toast.error("Video adding to category failed")
    }


  }




  const handleDragOver = (e) => {
    e.preventDefault()
    console.log("dragging over category")
  }



  return (
    <>
      <div className='border border-3 border-light' mt-3 p-3 style={{ borderRadius: '5px' }} >
        {allCategory ?
          allCategory.map(item => (


            <div className="card" style={{ margin: '6px', padding: '8px' }} droppable='true' onDragOver={e => { handleDragOver(e) }} onDrop={e => { handleDrop(e, item?.id) }}>
              <div className="card-body ">
                {item.categoryname}
                <i className="fa-solid fa-trash float-end" style={{ color: '#ff0000' }} onClick={() => handleDeleteCat(item.id)}></i>
              </div>

              <div>
                {item?.video.map(v => (
                  <VideoCard  video={v} cat={true}/>


              ))}
              </div>

            </div>

          )) : <h3>No Category</h3>}
      </div>




    </>
  )
}

export default CategoryList
