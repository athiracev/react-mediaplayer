import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { categoryAdd } from '../services/allApi';


function Categories() {

  const [show, setShow] = useState(false);
  const [addCategory,setAddCategory]=useState({
    category:''
  })

  const getdata=(e)=>{
    const {name,value}=e.target
    console.log(name,value)
    if(name==='category'){
      setAddCategory({category:value})
      console.log(value)

    }
    else{
      console.log(addCategory)
    }
  }

  const handleCategory=async()=>{
    const{category}=addCategory
    if(!category){
      toast.warning('Enter valid Details')
    }  
    else{
      console.log(addCategory)
      const res = await categoryAdd(addCategory) ///this will add data in db

      console.log(res)
      if(res.status>200 && res.status<300){
        toast.success("Added successfully")
        handleClose()
        setAddCategory('')
      }
      else{
        toast.error("Failed !!!")
      }

    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className='d-grid'>
      <Button variant='secondary' className='btn' onClick={handleShow}>Add Category</Button>
    </div>



<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Add Category</Form.Label>
        <Form.Control type="text" name="category" onChange={(e)=>{getdata(e)}} placeholder="Enter Category Name" />
      </Form.Group>
      
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCategory}>Add</Button>
        </Modal.Footer>
      </Modal>

      
    </>
  )
}

export default Categories
