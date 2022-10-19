import styled from 'styled-components';


const PrimaryBtn = styled.button`
display: flex;
align-items: flex-start;
padding: 10px 20px;
border-radius: 4px;
background-color: ${props=>props.bg};
text-decoration: none;
font-family: 'Lexend', Tahoma, Geneva, Verdana, sans-serif;
color: ${props=>props.cl};
font-size: ${props=>props.sz};
`



export default function Button({
  size = '12px',
  bgcolor = '#171717',
  txtcolor = '#FFFFFF',
  txt = 'Primary',
  type = 'type'
}) {
  return (
  <PrimaryBtn sz={size} bg={bgcolor} cl={txtcolor} type = {type}>{txt}</PrimaryBtn>
  )
  
  
}