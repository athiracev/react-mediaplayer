import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Addvideos() {


    const [show, setShow] = useState(false);
    const [video, setVideo] = useState({
        caption: '',
        url: '',
        image: ''
    })


    const getdata = (e) => {

        const { name, value } = e.target
        // console.log(name,value);
        if (name === 'caption') {
            setVideo({ ...video, caption: value })

        }
        if (name === 'url') {
            let furl = value
            furl = furl.split('v=')
            // console.log(furl)
            let vurl = `https://www.youtube.com/embed/${furl[1]}?si=jNGHf3xthjZ6Kpgy&autoplay=1`
            // console.log(vurl);
            setVideo({ ...video, url: vurl })
        }
        if (name === 'image') {
            setVideo({ ...video, image: value })
        }

    }

    
    


    const handleUpload = async () => {
        const { caption, url, image } = video

        if (!caption || !url || !image) {
            toast.warning('Enter Valid Details!!!', {
                position: 'top-center'
            })
        }
        else {
            console.log(video)
            const res = await uploadVideo(video) ///this will add data in db
            //  console.log(res)
            if (res.status > 200 && res.status < 300) {
                toast.success("Video Uploaded Successfully !!!")
                handleClose()
                setVideo('')
            }
            else {
                toast.error("Video Uploading Failed")
            }


        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <span className='btn' onClick={handleShow}>
                <i class="fa-solid fa-plus fa-lg"></i>
            </span>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Video Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Caption</Form.Label>
                            <Form.Control type="email" name='caption' onChange={(e) => { getdata(e) }} placeholder="Enter Video Caption" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Video URL</Form.Label>
                            <Form.Control type="email" name='url' onChange={(e) => { getdata(e) }} placeholder="Enter Youtube Video URL" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control type="email" name='image' onChange={(e) => { getdata(e) }} placeholder="Enter Thumbnail Image URL" />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpload}>Upload</Button>
                </Modal.Footer>
            </Modal >

        </>
    )
}

export default Addvideos
