// import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';


const Cont = styled.div`
padding: 0 2rem;
display: flex;
justify-content: baseline;
flex-direction: column;
background: #6D6D6D;
`

const Navbar = styled.header`
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
`
const Menu = styled.a`
margin-right: 1vw;
`

export default function Header() {
  return (
    <Cont>
      <Navbar>
        <MenuCont>
          <Link href="/">
            <Image
            src= '/LOGO.svg'
            width= '100px'
            height = '33px'
           /></Link>
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
          <Link href="/account">
            <Menu>My Account</Menu>
          </Link>
        </MenuCont>
      </Navbar>
    </Cont>
  );
}
