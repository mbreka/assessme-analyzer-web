import { ActionIcon } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { IconClearAll } from '@tabler/icons';
import { AssessFile } from '../../common/interfaces';

function ClearFilesButton() {
  const [files, setFiles] = useLocalStorage<AssessFile[]>({
    key: "loaded-file",
    defaultValue: []
  });

  return (
    <>
      <ActionIcon
        variant="outline"
        color="orange"
        onClick={() => setFiles([])}
        title="Toggle color scheme"
      >
        <IconClearAll />
      </ActionIcon>
    </>
  );
}

export default ClearFilesButton;
