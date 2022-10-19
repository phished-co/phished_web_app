import styled from 'styled-components';


const PrimaryBtn = styled.button`
display: flex;
align-items: flex-start;
border: 1px solid cornflowerblue;
padding: 0.9vw;
border-radius: 10px;
background-color: ${props=>props.bg};
margin-top: 2vw;
text-decoration: none;
font-family: 'Lexend', Tahoma, Geneva, Verdana, sans-serif;
color: ${props=>props.cl};
font-size: ${props=>props.sz};
cursor: pointer;
  :hover{
    background-color: rgb(0, 63, 158);
  }
`



export default function Button({
  size = '12px',
  bgcolor = '#2830f8',
  txtcolor = '#FFFFFF',
  txt = 'Primary',
  type = 'type'
}) {
  return (
  <PrimaryBtn sz={size} bg={bgcolor} cl={txtcolor} type = {type}>{txt}</PrimaryBtn>
  )
  
  
}