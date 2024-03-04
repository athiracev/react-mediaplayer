import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-100 d-flex flex-column justify-content-center bg-dark'>
      <div className="row p-5">
        <div className="col">
          <h3>Media Player</h3>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor, impedit nam praesentium optio voluptates consequuntur
            repudiandae! Maiores tempora velit esse architecto eos reprehenderit
            consequuntur. Praesentium asperiores commodi voluptate ipsum, perferendis
             odio rem inventore iste obcaecati error itaque repellat earum quisquam?</p>
        </div>
        <div className="col">
          <h3>Links</h3>
          <Link to={'/'}>Landing</Link><br />
          <Link to={'/dashboard'}>Dashboard</Link><br />
          <Link to={'/history'}>History</Link>
        </div>
        <div className="col">
          <h3>References</h3>
          <a href="https://getbootstrap.com/" target='_blank' style={{color:'blue'}}>Bootstrap</a><br />
          <a href="https://react-bootstrap.github.io/" target='_blank' style={{color:'blue'}}>React-Bootstrap</a><br />
          <a href="https://react.dev/" target='_blank' style={{color:'blue'}}>React</a>
        </div>
      </div>
      <div className='text-center '>
        <p>&copy; Media Player 2024</p>
      </div>

    </div>
  )
}

export default Footer
