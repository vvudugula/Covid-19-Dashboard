import React, { FC } from 'react';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
<>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
          <img
              src='images/logo.JPG'
              height='30'
              alt=''
              loading='lazy'
            />
            Covid-19 Dashboard
          </MDBNavbarBrand>
          {new Date(Date.now()).toLocaleString()}
        </MDBContainer>
      </MDBNavbar>
      <br/>
    </>
);

export default Header;
