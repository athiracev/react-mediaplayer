import React,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col } from 'react-bootstrap';

function VideoCard({video}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <Card style={{ width: '18rem',height:'300px' }} className='ms-3 mb-3'> 
        <Card.Img style={{height:'200px'}} variant="top" src={video.image}  onClick={handleShow}/>
        <Card.Body className='d-flex flex-row justify-content-between'>
          <Card.Title style={{color:'black'}}>{video.caption}</Card.Title>
          <i className="fa-solid fa-trash" style={{color:'#e51515'}}></i>

          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <iframe width="100%" height="315" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  )
}

export default VideoCard
