import { ActionIcon } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

function TestButton() {

  const doTest = () => {
    // alert("Aaa")
  }

  return (
    <>
      <ActionIcon
        variant="outline"
        color='white'
        onClick={() => doTest()}
        title="Toggle color scheme"
      >
        <IconSun size={18} /> 
      </ActionIcon>
    </>
  );
}

export default TestButton;
