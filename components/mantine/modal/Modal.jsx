import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import { AuthenticationForm } from '../authentication/Authentication';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';

export function MantineModal() {
  const { data: session } = useSession();
  console.log(session);
  const r = useRouter();

  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)}>
        <AuthenticationForm />
      </Modal>

      <Group position="center">
        {/* <Button type='null' onClick={() => setOpened(true)}>Log in</Button> */}
        {!session ? (
          <Button type="null" onClick={signIn}>
            Log in
          </Button>
        ) : (
          // <Button
          //   type="null"
          //   onClick={() => {
          //     r.push({ pathname: '/account' });
          //   }}
          // >
          //   Account
          // </Button>
          <Button type="null" onClick={signOut}>
            Sign out
          </Button>
        )}
      </Group>
    </>
  );
}

export default MantineModal;
