import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            <img
              src='https://toppng.com/uploads/preview/responsive-website-design-logo-brand-design-and-graphic-logo-web-design-services-11563204716jsyklmlpuj.png'
              height='50'
              alt=''
              loading='lazy'
            />
            <span style={{color:'azure',fontWeight:'bold',fontSize:'40px'}}>Project Portico</span>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header