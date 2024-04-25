import React, { useEffect, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import pgm3 from '../assets/pgm3.jpg'
import Projectcard from '../Components/Projectcard'
import { getHomeprojectAPI } from '../Services/allAPIs';
function Home() {
  const [isLoggedin,setIsLoggedin] = useState(false)
  const [homeproject,setHomeproject]=useState({}) // sate to pass 3 project 

const gethomeproject=async(req,res)=>{ // to get 3 projects to home
  //Api call
   const result = await getHomeprojectAPI()
   console.log(result);
   if(result.status==200){
    setHomeproject(result.data)

   }
   else{
    console.log(result.message);
   }
}
console.log(homeproject);

  // const [isLoggedin,setIsLoggedin] = useState(false)
  useEffect(()=>{
    gethomeproject() // to get 3 home project
    if(sessionStorage.getItem("token")){
      setIsLoggedin(true)
    }
    else{
      setIsLoggedin(false)
    }
  },[])
  return (
    <div>
        <div className="row">
    <div className="col-lg-5 mx-3" style={{textAlign:'justify'}}>
        <h1 className='text-center mt-5'>Project Portico</h1>
        <p>The objective of this web development project is to create an interactive platform where users can easily discover and explore various recipes. The platform aims to provide a user-friendly interface with advanced search and filtering options, enabling users to find recipes based on their dietary preferences, ingredients available, and cooking time.</p>
        {/* <Link to={'/login'}> 
        <MDBBtn color='dark'>
        get started
      </MDBBtn>
        </Link>  here we use ternary operator  */}
        
        {
          isLoggedin? 
          <Link to={'/dashboard'}> 
        <MDBBtn color='dark'>
        manage your projects
      </MDBBtn>
        </Link> 
        : 
        <Link to={'/login'}> 
        <MDBBtn color='dark'>
        get started
      </MDBBtn>
        </Link>
        } 
       
    </div>

    <div className="col-lg-5">
      <img src={pgm3} alt="" style={{width:'400px',height:'350px'}} />
    </div>
   
    </div>

    {/* SECOND ROW */}
    <div className="row">
  <div className="col-lg-12" style={{height:'500px'}}>
    <h1 className='text-center m-5'>Explore our Projects</h1>
    <marquee width="100%" direction="left" height="400px">
      <div className="row">
      {
        homeproject.length>0? homeproject.map(item=>(
          <div className='col'> 
          <Projectcard project={item}/>
        </div>
  )) :"null"
      }
       
      </div>
      {/* {
        homeproject.length>0? homeproject.map(item=>(
          <div> 
          <Projectcard project={item}/>
        </div>
  )) :"null"
      } */}
        {/* <div> 
          <Projectcard/>
        </div> */}
</marquee>
  </div>
 </div>

{/* THIRD ROW */}
<div className="row">
  <h1 className='text-center m-5'>Our Services</h1>
  <div className="col-lg-4">
    <div className='card-shadow p-5' style={{textAlign:'justify'}}>
    <h4 className='text-center'>Web desigining</h4>
    <p >Web design is the process of creating the visual and functional elements of websites. It involves several disciplines, including graphic design, user experience (UX) design, interface design, and coding. Web designers aim to create websites that are visually appealing, easy to navigate, and effective in conveying information or achieving specific goals.</p>

    </div>
  </div>

  <div className="col-lg-4">
  <div className='card-shadow p-5' style={{textAlign:'justify'}}>
    <h4 className='text-center'>Web desigining</h4>
    <p >Web design is the process of creating the visual and functional elements of websites. It involves several disciplines, including graphic design, user experience (UX) design, interface design, and coding. Web designers aim to create websites that are visually appealing, easy to navigate, and effective in conveying information or achieving specific goals.</p>

    </div>
  </div>


  <div className="col-lg-4">
  <div className='card-shadow p-5' style={{textAlign:'justify'}}>
    <h4 className='text-center'>Web desigining</h4>
    <p >Web design is the process of creating the visual and functional elements of websites. It involves several disciplines, including graphic design, user experience (UX) design, interface design, and coding. Web designers aim to create websites that are visually appealing, easy to navigate, and effective in conveying information or achieving specific goals.</p>

    </div>
  </div>
</div>


    </div>
  )
}

export default Home