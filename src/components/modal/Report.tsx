import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import Content from '../table/Table';

function Report() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        centered
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        <Content />
        {/* Modal content */}
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
}

export default Report;