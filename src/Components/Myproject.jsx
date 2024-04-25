import React, { useContext, useEffect } from 'react'
import Addpro from '../Components/Addpro'
import { FaGithub } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import { useState } from 'react';
import { getAuserproject } from '../Services/allAPIs';
import { addproResponsecontext } from '../ContextAPI/ContextShare';


function Myproject() {
    const {addprojextresponse,setAddprojectresponse}=useContext(addproResponsecontext)

    const[userprojects,setUserprojects]=useState([])
    const getuserproject = async()=>{
        //token
        if(sessionStorage.getItem('token')){
            const token = sessionStorage.getItem('token')

            const reqHeader={
                "Content-Type":"application/json",
                "Authorization":"Bearer "+ token
            }

            //api call
            const result = await getAuserproject(reqHeader)
            console.log(result);
            setUserprojects(result.data)
        }
    }

    useEffect(()=>{
        getuserproject()
    },[addprojextresponse]) // addprojextresponse is from context api
  return (
    <div>
        <div className='d-flex justify-content-between'>
            <h3 className='mx-5'>My Projects</h3>
            <Addpro/>
        </div>
        {
            userprojects.length>0?userprojects.map(
                item=>(
                    <div className="row shadow m-4 border p-5">
            <div className="col-lg-6">
                <h4>{item.title}</h4>
            </div>

            <div className="col-lg-6 d-flex justify-content-between">
                <button className='btn btn-darl mx-2'><a href={item.github}><FaGithub/></a></button>
                <button className='btn btn-darl mx-2'><FaEdit /> </button>
                <button className='btn btn-darl mx-2'> <MdAutoDelete /></button>
            </div>
        </div>
                )
            ) : "No projects"
        }
        {/* <div className="row shadow m-4 border p-5">
            <div className="col-lg-6">
                <h4>Project Title</h4>
            </div>

            <div className="col-lg-6 d-flex justify-content-between">
                <button className='btn btn-darl mx-2'><FaGithub/></button>
                <button className='btn btn-darl mx-2'><FaEdit /> </button>
                <button className='btn btn-darl mx-2'> <MdAutoDelete /></button>
            </div>
        </div> */}
    </div>
  )
}

export default Myproject