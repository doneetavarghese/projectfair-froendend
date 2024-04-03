import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Addpro() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
       <button className='btn btn-dark' onClick={handleShow}>Add</button> 

      {/* MODAL CODE FROM REACT BOOTSTRAP */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className="col-lg-6">
            <label>
            <input type="file" style={{display:'none'}}/>
            <img src="https://cdn.dribbble.com/users/1025838/screenshots/6220885/devguy3.gif" alt="" style={{width:'300px'}} />
           </label>
            </div>

            <div className="col-lg-6">
              <input type="text" placeholder='project title' className='form-control mb-3' />
              <input type="text" placeholder='Language Use' className='form-control mb-3' />
              <input type="text" placeholder='Github Link' className='form-control mb-3' />
              <input type="text" placeholder='Live Link' className='form-control mb-3' />
              <input type="text" placeholder='Overview' className='form-control mb-3' />
             
            </div>
         
           
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light" >
            Add
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addpro