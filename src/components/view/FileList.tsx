import { List, Loader, ThemeIcon, Text } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { IconCircleCheck } from '@tabler/icons';
import { useEffect } from 'react';

function FileList() {
  const [files, setFiles] = useLocalStorage<File[]>({
    key: "loaded-file",
    defaultValue: []
  });

  useEffect(()=>{
    files.forEach((a)=>console.log(a))
  })


  return (
    <List
      spacing="xs"
      size="sm"
      center
      my={20}
      icon={
        <ThemeIcon color="teal" size={'sm'} radius="xl">
          <IconCircleCheck size={16} />
        </ThemeIcon>
      }
    >
      {files.map((file: File)=><>
      <List.Item key={Math.random()*10000} icon={<Loader size={13} />}><Text size={'md'}>{file.name}</Text></List.Item>
      </>)}
      {/* <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item icon={<Loader size={19} />}>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item> */}
    </List>
  );
}

export default FileList;
