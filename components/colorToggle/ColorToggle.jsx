// import { ActionIcon, useMantineColorScheme } from '@mantine/core';

// export default function ColorToggle(props) {

//   const { colorScheme, toggleColorScheme } = useMantineColorScheme()
//   const dark = colorScheme === 'dark'

//   return <>
//     <ActionIcon
//       variant="subtle"
//       color={dark ? 'yellow' : 'indigo'}
//       onClick={() => toggleColorScheme()}
//       title='Toggle color scheme'
//       type='null'
//       size='sm'
//     >
//       {dark ?
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
//           <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
//         </svg>
//         :
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
//           <path fillRule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clipRule="evenodd" />
//         </svg>

//       }
//     </ActionIcon>
//   </>
// }

import { useMantineColorScheme, SegmentedControl, Group, Center, Box } from '@mantine/core';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'

export default function ColorToggle(position) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="left" my="xl">
      <SegmentedControl
        value={colorScheme}
        onChange={(value) => toggleColorScheme(value)}
        data={[
          {
            value: 'light',
            label: (
              <Center>
                <RiSunFill size={16} stroke={1.5} />
                <Box ml={10}>Light</Box>
              </Center>
            ),
          },
          {
            value: 'dark',
            label: (
              <Center>
                <RiMoonClearFill size={16} stroke={1.5} />
                <Box ml={10}>Dark</Box>
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
}
