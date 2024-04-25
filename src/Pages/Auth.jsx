import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerAPI } from '../Services/allAPIs'
import { loginAPI } from '../Services/allAPIs'
import{useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

function Auth({ register }) {
  const Navigate = useNavigate()
  const [userData, setUserData] = useState({
    username:"",
    email:"",
    password:"",
  })
  // console.log(userData);

   // 1 API CALL FOR REGISTER
  const handleRegister = async (e) => {
    e.preventDefault() // to avoid unnecessary loading
    if (!userData.username || !userData.email || !userData.password) {
      alert("Please fill the form")
    } else {
 // registerAPI is taken from allAPI.js
      const result = await registerAPI(userData)
      console.log(result);

      if(result.status===200){ 
        // alert("Successfullt regestered")
        Swal.fire({  // from-  sweetalert2
          title: 'Success',
          text: 'successfully registered',
          icon: 'success',
          confirmButtonText: 'back'
        })
        setUserData({
          username:"",
          email:"",
          password:""
        })
        // after register to navigate login page
        Navigate('/login')
      }
      else if (result.response.status===404){
        alert(result.response.data)
      }
    }
    console.log(userData)
  }
  
  // 2  API CALL FOR LOGIN
     
  
  const handleLogin = async (e) => {
    e.preventDefault() // to avoid unnecessary loading
    if ( !userData.email || !userData.password) {
      alert("Please fill the form")
    } else {
 // registerAPI is taken from allAPI.js
      const result = await loginAPI(userData)
      console.log(result);

      if(result.status===200){ 
        sessionStorage.setItem("username",result.data.existingUser.username)
        sessionStorage.setItem("token",result.data.token)
        // alert("Successfullt regestered")
        Swal.fire({  // from-  sweetalert2
          title: 'Success',
          text: 'successfully registered',
          icon: 'success',
          confirmButtonText: 'back'
        })
        setUserData({
        
          email:"",
          password:""
        })
        // after register to navigate login page
        Navigate('/home')
      }
      else if (result.response.status===406){
        alert(result.response.data)
      }
    }
    console.log(userData)
  }


   
  return (
    <div>
      <div className="row">
        <div className="col-lg-5 mx-2 my-3">
         <img src="https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif" alt="" style={{width:'400px',height:"400px"}} />
        </div>
        <div className="col-lg-6">
          <form className='my-2 p-3'>
            <h2>Project Fair</h2>
            {
              register ? 'Register here..' : 'Login here'
            }

            <div>
              {
                register &&
                <input onChange={e => setUserData({ ...userData, username: e.target.value })} value={userData.username} type="text" placeholder='Username' className='form-control mb-2' />
              }
              <input onChange={e => setUserData({ ...userData, email: e.target.value })} value={userData.email} type="email" placeholder='Email' className='form-control mb-2'/>
              <input onChange={e => setUserData({ ...userData, password: e.target.value })} value={userData.password} type="password" placeholder='Password' className='form-control mb-2'/>
            </div>

            <div>
              {
                register ?
                <div className='text-center m-4'>
                  <button onClick={handleRegister} className='btn btn-dark'>Register</button>
                  <p>Already registered? <Link to={'/login'}>Login here</Link></p>
                </div>
                :
                <div className='text-center m-4'>
                  <button onClick={handleLogin}  type="submit" className='btn btn-dark'>Login</button>
                  <p>New to here? <Link to={'/register'}>Register here</Link></p>
                </div>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth

















