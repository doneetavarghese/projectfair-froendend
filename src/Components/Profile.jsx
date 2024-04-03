import React from 'react'
import Swal from 'sweetalert2'


function Profile() {
  const updateUser = ()=>{
    Swal.fire({
      title: 'Success',
      text: 'User detail updated',
      icon: 'success',
      confirmButtonText: 'back'
    })
  }
  return (
    <div>
      <div className='text-center'>
        <h3 className='m-5'>My Profile</h3>
        <label>
          <input type="file" style={{display:'none'}}/>
          <img src="https://cdn-icons-png.flaticon.com/512/564/564834.png" alt="" style={{width:'200px'}} />
        </label>
        <input type="text" placeholder='Name' className='form-control mb-2 mt-4' />
        <input type="text" placeholder='Github' className='form-control mb-2' />
        <input type="text" placeholder='Live link' className='form-control mb-2' />
        <button className='btn btn-dark mx-5 mt-3 'onClick={updateUser}> Update</button>
      </div>
    </div>
  )
}

export default Profile