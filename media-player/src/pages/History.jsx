import React, { useEffect, useState } from 'react'
import { getHistory } from '../services/allApi'

function History() {
  const [allHistory, setAllHistory] = useState([])

  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const res = await getHistory()
    console.log(res)
    setAllHistory(res.data)
    console.log(res.data)



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



          </tr>
        </thead>
        {allHistory.map(item => (
        <tbody>
          <tr >
            <td>{item.id}</td>
            <td>{item.datetime}</td>
            <td>{item.caption}</td>
            <td>{item.url}</td>
          </tr>
          
        </tbody>
           ))}
      </table>
     

      </div>
    </>
  )
}

export default History
