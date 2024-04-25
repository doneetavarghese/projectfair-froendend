import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addprojectAPI } from '../Services/allAPIs';
import { addproResponsecontext } from '../ContextAPI/ContextShare';

function Addpro() {
  const {addprojextresponse,setAddprojectresponse}=useContext(addproResponsecontext)
  const [preview,setPreview]=useState() // nammal convert cheytha url ne use cheyan vende
  const [filestatus,setFilestatus] = useState(false) // file status image nte thazhe varan vende
  const [token,setToken]=useState("") // to hold token
  const [projectdata, setProjectdata] = useState({
    title: "",
    language: "",
    github: "",
    livelink: "",
    overview: "",
    projectImage: ""
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log(projectdata.projectImage.type);
    if (
      projectdata.projectImage.type === "image/png" ||
      projectdata.projectImage.type === "image/jpg" ||
      projectdata.projectImage.type === "image/jpeg") 
      {
      console.log("generate image url");
      setFilestatus(false)
      // file to url conversion
     console.log( URL.createObjectURL(projectdata.projectImage));
     setPreview(URL.createObjectURL(projectdata.projectImage))
    } else {
      setFilestatus(true)
      console.log("please upload following image extension png, jpg, jpeg");
    }
  }, [projectdata.projectImage]);

  const handleAddproject = async()=>{
    // data passing
     const {title,language,github,livelink,overview,projectImage}=projectdata
     if(!title|| !language||!github|| !livelink ||!overview ||!projectImage){
      alert("plese fill the field")
     }
     else{
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("language",language)
      reqBody.append("github",github)
      reqBody.append("livelink",livelink)
      reqBody.append("overview",overview)
      reqBody.append("projectImage",projectImage)
      
      if (token){
        const reqHeader={
          "content-Type" : "multipart/form-data", // build in functions anu so we should type like this way only -case sensitive
          "Authorization" : `Bearer ${token}` // build in functions anu so we should type like this way only -case sensitive
        }
        // api call
       const result = await addprojectAPI(reqBody,reqHeader)
       console.log(result);
       if(result.status==200){
        alert("project added successfully")
        setAddprojectresponse(result.data)   // to use contextapi

        handleClose()
        setProjectdata({
          title : "",
          language : "",
          github: "",
          livelink : "",
          overview : "",
          projectImage: "",

        })
        setPreview(" ")
       }
       else{
        alert(result.response.data)
       }

      }

       
     }

   
  }

  // create useeffet for token pass
  useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setToken(sessionStorage.getItem("token"))
  }
  else{
    setToken("")
  }
  },[])
  console.log(token);

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
                <input onChange={e => setProjectdata({ ...projectdata, projectImage: e.target.files[0] })} type="file" style={{ display: 'none' }} />
                <img src={preview? preview : "https://cdn.dribbble.com/users/1025838/screenshots/6220885/devguy3.gif"} alt="" style={{ width: '300px' }} />
               {filestatus &&  <p className='mx-2 my-2 text-danger'>"please upload following image extension png, jpg, jpeg"</p>}
              </label>
            </div>

            <div className="col-lg-6">
              <input onChange={e => setProjectdata({ ...projectdata, title: e.target.value })} type="text" placeholder='project title' className='form-control mb-3' />
              <input onChange={e => setProjectdata({ ...projectdata, language: e.target.value })} type="text" placeholder='Language Use' className='form-control mb-3' />
              <input onChange={e => setProjectdata({ ...projectdata, github: e.target.value })} type="text" placeholder='Github Link' className='form-control mb-3' />
              <input onChange={e => setProjectdata({ ...projectdata, livelink: e.target.value })} type="text" placeholder='Live Link' className='form-control mb-3' />
              <input onChange={e => setProjectdata({ ...projectdata, overview: e.target.value })} type="text" placeholder='Overview' className='form-control mb-3' />

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light" onClick={ handleAddproject}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Addpro;
