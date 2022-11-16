import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import { AuthenticationForm } from "../authentication/Authentication"

export function MantineModal() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <AuthenticationForm />
      </Modal>

      <Group position="center">
        <Button type='null' onClick={() => setOpened(true)}>Log in</Button>
      </Group>
    </>
  );
}

export default MantineModal