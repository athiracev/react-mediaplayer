import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Addvideos from '../components/Addvideos'
import Videos from '../components/Videos'
import Categories from '../components/Categories'
import { ToastContainer } from 'react-toastify'

function Dashboard() {
  return (
    <div>
      <Row className='p-2'>
        <Col sm='1' md='1'>
          <Addvideos />
        </Col>
        <Col sm='4' md='8'>
          <Videos />
        </Col>
        <Col sm='2' md='3'>
          <Categories />
        </Col>
      </Row>
    <ToastContainer/>

    </div>

  )
}

export default Dashboard
