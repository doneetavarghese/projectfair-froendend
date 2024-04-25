import React, { useEffect, useState } from 'react'

import Profile from '../Components/Profile'
import Myproject from '../Components/Myproject'
import { Link } from 'react-router-dom'

function Dashboard() {
  const [username,setUsername]=useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("username")){
      setUsername(sessionStorage.getItem("username"))
    }
    else{
      setUsername("")
    }
  })
  return (
    <div>
      <div className="row">
        <h2 className='text-center'>Welcome <span className='text-light'>{username}</span> </h2>
        <div className="col-lg-6">
          <Myproject/>
        </div>

        <div className="col-lg-6">
          <Profile/>
        </div>
      </div>
      <div className='text-center'>
       <Link to={'/project'}> <button className='btn btn-dark mb-5 mx-5'> View all projects</button></Link>
      </div>
    </div>
  )
}

export default Dashboard