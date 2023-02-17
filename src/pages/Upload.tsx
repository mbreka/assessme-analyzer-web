import { Box, Card, Center, Text } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '@mantine/hooks';
import { TableFile, UsersTableProps } from '../components/table/TableFile';
import { AssessFile } from '../common/interfaces';

function Upload() {
  const { t } = useTranslation();

  const [files, setFiles] = useLocalStorage<AssessFile[]>({
    key: 'loaded-file',
    defaultValue: [],
  });

  // const [tables, setTables] = useLocalStorage<UsersTableProps>({
  //   key: 'loaded-files-table',
  //   defaultValue: { data: [{ name: 'string', size: 4, email: 'string', version: 'string' }] },
  // });

  const addFile = (files: AssessFile[]) => {
    setFiles((old) => {
      return [
        ...old,
        ...files.map((x, i) => {
          const assess: AssessFile = {
            ...x,
            name: x.name
              ? x.name
                  .split('.')
                  .filter((v, i) => [0, 2].includes(i))
                  .join('.')
              : '',
            version: '?.?.?',
            email: 'Johnny Dough',
            size: x.size ? x.size : 1,
            label: 'Hi',
            value: x.name,
            path: x.type,
            lastModified: x.lastModified ? x.lastModified : 0,
          };
          return assess;
        }),
      ];
    });
  };

  return (
    <>
     {files.length>0 && <Card mb={40}>
        <TableFile />
      </Card>}
      <Dropzone
        onDrop={addFile}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={3 * 1024 ** 2}
        accept={{ 'text/assessme': ['.assessme'], 'archive/compressed': ['.rar', '.zip'] }}
        h={300}
      >
        <Center h={200}>
          <Box h={10}>
            <Text weight={600} size={'xl'}>
              {t('drop.title')}
            </Text>
            <Text size={'xs'}>{t('drop.info')}</Text>
          </Box>
        </Center>
      </Dropzone>
    </>
  );
}

export default Upload;
