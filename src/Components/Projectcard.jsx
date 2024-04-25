import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { serverURL } from '../Services/serverURL';


function Projectcard({project}) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
          <Card style={{ width: '300px',height:'500px' }} onClick={handleShow}>
      <Card.Img variant="top" src={project?`${serverURL}/uploads/${project.projectImage}`  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbtAtQLFOY5E4L5fs5owH_aRlu0LqkJLT3Q7YwkzXc1g&s style={{width:'300px',height:'300px'}}"} />
      <Card.Body>
        <Card.Title className='text-center'>{project.title}</Card.Title>
        {/* <p style={{textAlign:'justify'}} className='mx-2'>{project.overview}</p>
        <p>{project.language}</p> */}
        
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
          <Modal.Title>project-title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row">
          <div className="col-lg-4">
            <img width={'100%'} src={project?`${serverURL}/uploads/${project.projectImage}`: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbtAtQLFOY5E4L5fs5owH_aRlu0LqkJLT3Q7YwkzXc1g&s style={{width:'300px',height:'300px'}}"} alt="" />
          </div>

          <div className="col-lg-7">
            <h4>{project.title}</h4>
             <p style={{textAlign:'justify'}}>Description:{project.overview}</p>
             <p>Technology used : <b>{project.language}</b></p>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='d-flex justify-content-between'>
            <button className='btn btn-dark mx-2' style={{textDecoration:'none'}}><a href={project.github}><FaGithub /></a></button>
            <button className='btn btn-dark mx-2' style={{textDecoration:'none'}}><a href={project.livelink}><FaLink /></a></button>
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