import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

function Projectcard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
          <Card style={{ width: '300px',height:'600px' }} onClick={handleShow}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbtAtQLFOY5E4L5fs5owH_aRlu0LqkJLT3Q7YwkzXc1g&s" style={{width:'300px',height:'300px'}} />
      <Card.Body>
        <Card.Title className='text-center'>Card Title</Card.Title>
        
      </Card.Body>
    </Card>
    {/* MODAL */}
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row">
          <div className="col-lg-4">
            <img src="" alt="" />
          </div>

          <div className="col-lg-7">
            <h4>project title</h4>
             <p style={{textAlign:'justify'}}>Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate aliquid autem reiciendis repudiandae eius? Quos, dolorum optio atque repellat quaerat voluptas animi adipisci consequuntur odit totam culpa amet iusto recusandae.</p>
             <p>Technology used : <br /> <b>React , Node</b></p>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='d-flex justify-content-between'>
            <button className='btn btn-dark mx-2' style={{textDecoration:'none'}}><a href=""><FaGithub /></a></button>
            <button className='btn btn-dark mx-2' style={{textDecoration:'none'}}><a href=""><FaLink /></a></button>
            <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </div>
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Projectcard