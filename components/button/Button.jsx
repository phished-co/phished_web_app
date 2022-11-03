import { Button } from '@mantine/core';



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