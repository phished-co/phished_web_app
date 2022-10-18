/* eslint-disable @next/next/no-img-element */
// ^^ We have to change this for future!! ^^

import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon } from '@heroicons/react/20/solid';
import styled from 'styled-components';


const NavCont = styled.nav`
display: flex;
justify-content: space-between;
align-items: flex-end
flex-direction: column;
background-color: #2830f8;
width: 100vw;

@media only screen and (max-width: 479px){
  & {
    height: 7vh;
    align-items: center;
  }
}

@media only screen and (min-width: 480px) {
   
  & {
    height: 72px;
  }

} 

`

const MenuCont = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 1.5vw 3vw;
`

const Menu = styled.a`
margin: 0 1vw;
color: white;
  text-decoration: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

@media only screen and (max-width: 480px) {
   
  & {
    display:none;
  }

} 

@media only screen and (min-width: 481px, max-width: 768px) {
   
  & {
    display:none;
  }

}
`

const MyImg = styled(Image)`
min-width: 100px;
min-height: 33px;
margin-right: 1vw;
` 

const Hamburger = styled.button`
display: none;

@media only screen and (max-width: 480px) {

  & {
    display: block;
    color: #fff;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
    margin: 1vw;

  }
}
`





export default function Header({ ...headerProps }) {
  return (
    <NavCont>
      
        <Hamburger>
          <Bars3Icon />
        </Hamburger>
        <MenuCont>

          <Link href="/landingPage">
            
              <MyImg
                src="/LOGO.svg"
                alt="logo placeholder"
                width= '100px'
                height = '33px'
              />
            
          </Link>
          <Link href="/about">
            <Menu>About</Menu>
          </Link>
          <Link href="/learn">
            <Menu>Learn</Menu>
          </Link>
        </MenuCont>
        <MenuCont>
          <Link href="/dashboard">
            <Menu>Dashboard</Menu>
          </Link>
          <Link href="/">
            <Menu>My Account</Menu>
          </Link>
          <Hamburger>
            {/* This is just a placeholder for login button */}
            <Bars3Icon />
          </Hamburger>
        </MenuCont>
    </NavCont>
  );
}