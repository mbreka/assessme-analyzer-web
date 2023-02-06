import { useRef, useState } from 'react';
import { Box, Button, Center, Group, Text } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { useTranslation } from 'react-i18next';

function Demo() {
  const { t } = useTranslation();
  const [files, setFiles] = useState<File[]>([]);

  const addFile = (files: File[]) => {
    files.forEach((file)=>{
      console.log(file)
    })
  }

  return (
    <>
      <Dropzone
        onDrop={addFile}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={3 * 1024 ** 2}
        accept={{ 'text/assessme': ['.assessme'] }}
        h={400}
      >
        <Center h={300}>
          <Box h={10}>
            <Text size={'xl'}>{t('drop.title')}</Text>
            <Text size={'xs'}>{t('drop.info')}</Text>
          </Box>
        </Center>
      </Dropzone>
    </>
  );
}

export default Demo;
