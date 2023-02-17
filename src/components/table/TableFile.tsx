import { Avatar, Badge, Table, Group, Text, ActionIcon, Anchor, ScrollArea, useMantineTheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { IconPencil, IconTrash, IconFile } from '@tabler/icons';
import { AssessFile } from '../../common/interfaces';
import ClearFilesButton from '../buttons/ClearFiles';

export interface UsersTableProps {
  data: AssessFile[];
}

const jobColors: Record<string, string> = {
  engineer: 'blue',
  manager: 'cyan',
  designer: 'pink',
};


export function TableFile() {
  const theme = useMantineTheme();
  
  const [files, setFiles] = useLocalStorage<AssessFile[]>({
    key: 'loaded-file',
    defaultValue: [],
  });

  const rows = files.map((item) => {
    const removeFile = () => {

      // setFiles((old)=>old.filter((old)=>old===item));
      setFiles((old)=>old.filter((old)=>old!==item));
    }
    return <>
      <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <IconFile/> 
          <Text size="sm" weight={500}>
            {item.name}
          </Text>
        </Group>
      </td>

      <td>
        <Anchor<'a'> size="sm" href="#" onClick={(event) => event.preventDefault()}>
          {item.email}
        </Anchor>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {item.size}
        </Text>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {item.lastModified}
        </Text>
      </td>
      <td>
        <Text size="sm" color="dimmed">
          {item.version}
        </Text>
      </td>


      <td>

        <Group spacing={0} position="right">
          <ActionIcon onClick={removeFile} color="red">
            <IconTrash size={16} stroke={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
    </>
  });

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Size</th>
            <th>Last Modified</th>
            <th>Version</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
