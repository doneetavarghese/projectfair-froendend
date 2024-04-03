import React from 'react'
import Addpro from '../Components/Addpro'
import { FaGithub } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
function Myproject() {
  return (
    <div>
        <div className='d-flex justify-content-between'>
            <h3 className='mx-5'>My Projects</h3>
            <Addpro/>
        </div>
        <div className="row shadow m-4 border p-5">
            <div className="col-lg-6">
                <h4>Project Title</h4>
            </div>

            <div className="col-lg-6 d-flex justify-content-between">
                <button className='btn btn-darl mx-2'><FaGithub/></button>
                <button className='btn btn-darl mx-2'><FaEdit /> </button>
                <button className='btn btn-darl mx-2'> <MdAutoDelete /></button>
            </div>
        </div>
    </div>
  )
}

export default Myproject