import { Prism } from '@mantine/prism';

const demoCode = `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`;

function Save() {
  return <Prism language="tsx">{demoCode}</Prism>;
}

export default Save;