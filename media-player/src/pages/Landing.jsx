import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
      <div className='w-100 d-flex justify-content-center align-items-center ' style={{ height: '80vh' }}>
        <div className="row p-5 shadow">
          <div className="col d-flex flex-column justify-content-center">
            <h1>Media Player</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse repellat nam reprehenderit voluptate dicta sunt ad culpa ut delectus mollitia laboriosam
              ducimus adipisci dolorum unde quisquam, expedita, aliquid quam qui atque! Ipsam rem ea, omnis molestiae veritatis numquam!</p>
            <div>
              <Link to={'/dashboard'} className='btn btn-light'>Explore</Link>

            </div>
          </div>

          <div className="col">
            <img src="https://wallpapercave.com/wp/wp3413579.jpg" style={{ height: '500px' }} className='image fluid shadow' alt="" />
          </div>
        </div>
      </div>


      <div className="mt-3 p-5">
        <h2 className='text-center'>Features</h2>
        <div className="d-flex mt-2 flex-row justify-content-between">

          {/* this is react bootstrap card code */}

          {/* <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> */}

          {/* //or */}
          {/* this is bootstrap 5 card code */}

          <div className="card" style={{ width: "18rem" }}>
            <img src="https://cdn.dribbble.com/users/1340032/screenshots/2964726/upload.gif" style={{ height: '250px' }} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Upload Videos</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src="https://i.pinimg.com/originals/e3/10/6b/e3106b678b0d99327062454871555a48.gif" style={{ height: '250px' }} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Watch Videos</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src="https://media.giphy.com/media/MW9doQ4KZWZAk/giphy.gif" style={{ height: '250px' }} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">View History</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

        </div>
<br /> <br /> <br />

        <div className="row  mt-5 d-flex justify-content-center align-items-center ">
            <div className="col">
              <h1>Simple Fast & Secure</h1>
              <p  style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolores totam, facere voluptates dignissimos
                tempora fugiat architecto, necessitatibus sint iste iure eum, harum corrupti. Quos vitae esse eius vel itaque?</p>
            </div>
            <div className="col">

              <iframe width="700" height="400" src="https://www.youtube.com/embed/PbA63a7H0bo?si=eHVuOl_NbDhZxFHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
              clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
          </div>
      </div>
    </>

  )
}

export default Landing
