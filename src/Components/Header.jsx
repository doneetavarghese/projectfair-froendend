// import React, { useEffect, useState } from 'react'
// import {
//     MDBContainer,
//     MDBNavbar,
//     MDBNavbarBrand
//   } from 'mdb-react-ui-kit';
// function Header() {
//   const [token,setToken]=useState(false)
//   useEffect(()=>{
//     if(sessionStorage.getItem("token")){
//       setToken(true)
//     }
//     else{
//       setToken(false)
//     }
//   })
//   return (
//     <div>
//    {
   
//     token?
    
//     <MDBNavbar light bgColor='dark'>
//     <MDBContainer fluid>
//       <MDBNavbarBrand href='/'>
//         <img
//           src='https://toppng.com/uploads/preview/responsive-website-design-logo-brand-design-and-graphic-logo-web-design-services-11563204716jsyklmlpuj.png'
//           height='50'
//           alt=''
//           loading='lazy'
//         />
//         <span style={{color:'azure',fontWeight:'bold',fontSize:'40px'}}>Project Portico</span>
//       </MDBNavbarBrand>
//     </MDBContainer>
//   </MDBNavbar>
// :

// <div>
// <MDBNavbar light bgColor='dark'>
// <MDBContainer fluid>
//   <MDBNavbarBrand href='/'>
//     <img
//       src='https://toppng.com/uploads/preview/responsive-website-design-logo-brand-design-and-graphic-logo-web-design-services-11563204716jsyklmlpuj.png'
//       height='50'
//       alt=''
//       loading='lazy'
//     />
//     <span style={{color:'azure',fontWeight:'bold',fontSize:'40px'}}>Project Portico</span>
//   </MDBNavbarBrand>
// </MDBContainer>
// </MDBNavbar>
// </div>
//    }
//    <div/>
//   )
// }

// export default Header

import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';

function Header() {
  const [token, setToken] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(true);
    } else {
      setToken(false);
    }
  }, []); // empty dependency array to run the effect only once after initial render

  return (
    <div>
      {token ? (
        <MDBNavbar light bgColor='dark'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='/'>
              <img
                src='https://toppng.com/uploads/preview/responsive-website-design-logo-brand-design-and-graphic-logo-web-design-services-11563204716jsyklmlpuj.png'
                height='50'
                alt=''
                loading='lazy'
              />
              <span style={{ color: 'azure', fontWeight: 'bold', fontSize: '40px' }}>Project Portico</span>
            </MDBNavbarBrand>
            <h1>Logout</h1>
          </MDBContainer>
        </MDBNavbar>
      ) : (
        <MDBNavbar light bgColor='dark'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='/'>
              <img
                src='https://toppng.com/uploads/preview/responsive-website-design-logo-brand-design-and-graphic-logo-web-design-services-11563204716jsyklmlpuj.png'
                height='50'
                alt=''
                loading='lazy'
              />
              <span style={{ color: 'azure', fontWeight: 'bold', fontSize: '40px' }}>Project Portico</span>
            </MDBNavbarBrand>
          </MDBContainer>
        </MDBNavbar>
      )}
      <div />
    </div>
  );
}

export default Header;
