import { useState, useEffect } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import { AuthenticationForm } from '../authentication/Authentication';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
import { getCsrfToken } from 'next-auth/react';

export function MantineModal() {
  const { data: session, status } = useSession();

  console.log(useSession());
  const r = useRouter();
  const [opened, setOpened] = useState(false);
  const [csrfToken, setCsrfToken] = useState('');
  useEffect(() => {
    async function fetchCsrfToken() {
      const result = await getCsrfToken();
      if (!result) {
        throw new Error('Can not sign in without a CSRF token');
      }
      setCsrfToken(result);
    }

    if (status !== 'loading') {
      fetchCsrfToken();
    }
  }, [status]);
  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)}>
        <AuthenticationForm />
      </Modal>

      <Group position="center">
        {!session ? (
          <Button type="null" onClick={signIn}>
            Log in
          </Button>
        ) : (
          <Button type="null" onClick={signOut}>
            Sign out
          </Button>
        )}
      </Group>
    </>
  );
}

export default MantineModal;
