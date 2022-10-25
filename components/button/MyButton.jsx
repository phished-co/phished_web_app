import styled from 'styled-components';
import { Button } from '@mantine/core';

// const PrimaryBtn = styled.button`
// display: flex;
// align-items: flex-start;
// border: 1px solid cornflowerblue;
// padding: 0.9vw;
// border-radius: 10px;
// background-color: ${props=>props.bg};
// margin-top: 2vw;
// text-decoration: none;
// font-family: 'Lexend', Tahoma, Geneva, Verdana, sans-serif;
// color: ${props=>props.cl};
// font-size: ${props=>props.sz};
// cursor: pointer;
//   :hover{
//     background-color: rgb(0, 63, 158);
//   }
// `



export default function MyButton({
color = 'blue',
variant = 'fill',
size = 'md',
type="null",
txt='Button',
disabled=false,
}) {
  return (
  <Button color={color} variant={variant} size={size} type={type} disabled={disabled}>{txt}</Button>
  )
  
  
}