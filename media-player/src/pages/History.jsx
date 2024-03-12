import React, { useEffect, useState } from 'react'
import { deleteHistory, getHistory } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function History() {
  const [allHistory, setAllHistory] = useState([])
  const [allHistoryStatus, setAllHistoryStatus] = useState([])


  useEffect(() => {
    getData()
  }, [allHistoryStatus])
  const getData = async () => {
    const res = await getHistory()
    console.log(res)
    setAllHistory(res.data)
    console.log(res.data)

  }
  const handleDeleteHis = async (id) => {
    console.log(id)//check if id is getting
    const res = await deleteHistory(id)
    console.log("deleted", res)
    if (res.status >= 200 && res.status < 300) {
      setAllHistoryStatus(res.data)
      toast.success(" Deleted Successfully!!!")
    } else {
      toast.danger('Some error occured,Deletion failed!!!')
    }



  }


  return (

    <>
      <div>

        <table className='table border border-dark' >
          <thead className='table-info' >
            <tr >
              <th scope="col" >#</th>
              <th scope="col">Date</th>
              <th scope="col">Caption</th>
              <th scope="col">Video Url</th>
              <th></th>



            </tr>
          </thead>
          {allHistory.length > 0 ? (
            allHistory.map(item => (
              <tbody key={item.id}>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.datetime}</td>
                  <td>{item.caption}</td>
                  <td>{item.url}</td>
                  <td>
                    <i
                      className="fa-solid fa-trash float-end"
                      style={{ color: 'red' }}
                      onClick={() => handleDeleteHis(item.id)}
                    ></i>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <tbody>
              <tr>
                <td colSpan="5"><h3>No history available</h3></td>
              </tr>
            </tbody>
          )}
        </table>


      </div>
      <ToastContainer />

    </>
  )
}

export default History
