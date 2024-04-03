import React from 'react'
import Projectcard from '../Components/Projectcard'

function Projects() {
  return (
    <div>
      <h2 className='text-center m-5'>All Projects</h2>
      <input type="text" placeholder='Search by Technologies' className='form-control mx-auto w-50 mx-5 my-5  ' />
      <div className="row">
        <div className="col">
          <Projectcard/>
        </div>
      </div>
    </div>
    
  )
}

export default Projects