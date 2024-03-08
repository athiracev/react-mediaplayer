import React, { useEffect, useState } from 'react'
import { getCategory } from '../services/allApi'
import { deleteCategory } from '../services/allApi'
import { toast } from 'react-toastify';



function CategoryList({ addCatStatus }) {
  const [allCategory, setAllCategory] = useState([])
  const [delCategoryStatus, setDelCategorySatus] = useState({})

  console.log(addCatStatus)

  useEffect(() => {
    getCat()

  }, [addCatStatus,delCategoryStatus])

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



  return (
    <>
      <div className='border border-3 border-light' mt-3 p-3 style={{ borderRadius: '5px' }}>
        {allCategory.map(item => (


          <div className="card" style={{ margin: '6px', padding: '8px' }}>
            <div className="card-body ">
              {item.categoryname}
              <i className="fa-solid fa-trash float-end" style={{ color: '#ff0000' }} onClick={() => handleDeleteCat(item.id)}></i>
            </div>
          </div>

        ))}
      </div>




    </>
  )
}

export default CategoryList
