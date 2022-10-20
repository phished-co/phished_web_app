import { ActionIcon, useMantineColorScheme } from '@mantine/core';

export default function ColorToggle() {

  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return <>
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title='Toggle color scheme'
    ></ActionIcon>
  </>
}
