import React, { useEffect, useState } from 'react'
import Projectcard from '../Components/Projectcard'
import { getUserprojectAPI } from '../Services/allAPIs'

function Projects() {
  const [searchkey,setSearchkey]=useState("") // 1 -SEARCH to hold the search key
  const [AllUserproject,setAllUserproject] = useState([])
  
  const getAlluserproject = async(req,res)=>{

    // get token ? authentication 
     if(sessionStorage.getItem('token')){
        const token =sessionStorage.getItem('token');
        // set reqheader
        const reqHeader ={
          "Content-Type" : "application/json",
          "Authorization": "Bearer " + token
        }
        //api call
        const result = await getUserprojectAPI(searchkey,reqHeader)
        console.log(result);
        if(result.status == 200){
          setAllUserproject(result.data)
        }
        else{
          console.log(result.response.data); // err
        }
     }
     console.log(AllUserproject);
    
  }
  useEffect(()=>{getAlluserproject()},[searchkey])
  console.log(searchkey);
  return (
    <div>
      <h2 className='text-center m-5'>All Projects</h2>
       {/* 2 SEARCH */}
      <input onChange={e=>setSearchkey(e.target.value)} type="text" placeholder='Search by Technologies' className='form-control mx-auto w-50 mx-5 my-5  ' /> 
      <div className="row">
        {
         AllUserproject.length>0 ? AllUserproject.map(item=>(<div className="col">
         <Projectcard project={item}/>
       </div>)) : "cant fetch all projects"
        }

        {/* <div className="col">
          <Projectcard/>
        </div> */}
      </div>
    </div>
    
  )
}

export default Projects















// import React, { useEffect, useState } from 'react';
// import Projectcard from '../Components/Projectcard';
// import { getUserprojectAPI } from '../Services/allAPIs';

// function Projects() {
//   const [AllUserproject, setAllUserproject] = useState([]);

//   useEffect(() => {
//     const getAllUserproject = async () => {
//       // get token ? authentication
//       if (sessionStorage.getItem('token')) {
//         const token = sessionStorage.getItem('token');
//         // set reqheader
//         const reqHeader = {
//           "Content-Type": "application/json",
//           "Authorization": "Bearer " + token // Add space after "Bearer"
//         };
//         // api call
//         try {
//           const result = await getUserprojectAPI(reqHeader);
//           console.log(result);
//           if (result.status === 200) {
//             setAllUserproject(result.data);
//           } else {
//             console.log(result.response.data); // err
//           }
//         } catch (error) {
//           console.error("Error fetching user projects:", error);
//         }
//       }
//     };
//     getAllUserproject(); // Call the function
//   }, []); // Empty dependency array to run once on mount

//   return (
//     <div>
//       <h2 className='text-center m-5'>All Projects</h2>
//       <input type="text" placeholder='Search by Technologies' className='form-control mx-auto w-50 mx-5 my-5  ' />
//       <div className="row">
//         {AllUserproject.length > 0 ? AllUserproject.map(item => (
//           // <div className="col" key={item.id}>
//           //   <Projectcard />
//           // </div>
//           AllUserproject ?.length>0 ? AllUserproject.map(item=>(<div className="col">
//           <Projectcard/>
//         </div>)) : "cant fetch all projects"
//         )) : "Can't fetch all projects"}
//       </div>
//     </div>
//   );
// }

// export default Projects;
