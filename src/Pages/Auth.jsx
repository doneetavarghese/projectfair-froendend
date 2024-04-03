import React from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
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
                  register?'register here..' :'login here'
                }

                <div>
                  {
                    register &&
                    <input type="text" placeholder='username' className='form-control mb-2' />
                  }
                  <input type="email" placeholder='email' className='form-control mb-2'/>
                  <input type="password" placeholder='password' className='form-control mb-2'/>
                </div>

                <div>
                {
                  register?
                  <div className='text-center m-4'>
                    <button className='btn btn-dark'>Register</button>
                    <p>Already registered? <Link to={'/login'}>Login here</Link></p>
                  </div>
                  :
                  <div className='text-center m-4'>
                    <button className='btn btn-dark'>Login</button>
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