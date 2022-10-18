/* eslint-disable @next/next/no-img-element */
// ^^ We have to change this for future!! ^^

import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon } from '@heroicons/react/20/solid';
import styled from 'styled-components';


const NavCont = styled.div`
padding: 0 2rem;
display: flex;
justify-content: baseline;
flex-direction: column;
background-color: #2830f8;
width: 100vw;
min-height: 33px;
`

const NavHead = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 1.5vw 3vw;


`

const MenuCont = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`

const Menu = styled.a`
margin-right: 1vw;
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

` 

const Hamburger = styled.button`


@media only screen and (max-width: 480px) {

  & {
    color: #fff;
    width: 30px;
    height: 30px;
  }
}
`





export default function Header({ ...headerProps }) {
  return (
    <NavCont>
      <NavHead>
        <Hamburger>
          <Bars3Icon />
        </Hamburger>
        <MenuCont>

          <Link href="/landingPage">
            <Menu>
              {/* have to make images a next/image element here */}
              <MyImg
                src="/LOGO.svg"
                alt="logo placeholder"
                width= '100px'
                height = '33px'
              />
            </Menu>
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
        </MenuCont>
      </NavHead>
    </NavCont>
  );
}
