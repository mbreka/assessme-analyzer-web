import { useEffect, useState } from 'react';
import {
  Text,
  Avatar,
  Checkbox,
  Group,
  TransferList,
  TransferListData,
  TransferListItemComponent,
  TransferListItemComponentProps,
  Stack,
  Box,
  Button,
} from '@mantine/core';
import TestButton from '../buttons/TestButt';
import { useTranslation } from 'react-i18next';

const mockdata = [
  {
    value: 'bender',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodríguez',
    description: 'Fascinated with cooking, though has no sense of taste',
  },

  {
    value: 'carol',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    description: 'One of the richest people on Earth',
  },
  // ...other items
];

const initialValues: TransferListData = [
  //   [
  //     { value: 'react', label: 'React' },
  //     { value: 'ng', label: 'Angular' },
  //     { value: 'next', label: 'Next.js' },
  //     { value: 'blitz', label: 'Blitz.js' },
  //     { value: 'gatsby', label: 'Gatsby.js' },
  //     { value: 'vue', label: 'Vue' },
  //     { value: 'jq', label: 'jQuery' },
  //   ],
  //   [
  //     { value: 'sv', label: 'Svelte' },
  //     { value: 'rw', label: 'Redwood' },
  //     { value: 'np', label: 'NumPy' },
  //     { value: 'dj', label: 'Django' },
  //     { value: 'fl', label: 'Flask' },
  //   ],
  [...mockdata],
  [],
];

const onSelectUh = (aaa: any) => {
  console.log(aaa);
};
const ItemComponent: TransferListItemComponent = ({ data, selected }: TransferListItemComponentProps) => (
  <Group noWrap>
    <Avatar src={data.image} radius="xl" size="lg" />

    <div style={{ flex: 7 }}>
      <Text size="sm" weight={500}>
        {data.label}
      </Text>
      <Text size="xs" color="dimmed" weight={400}>
        {data.description}
      </Text>
    </div>
    <div style={{ flex: 1 }}>
      <Text size="xs" color="dimmed" weight={400}>
        Uh
      </Text>
      {/* <TestButton /> */}
    </div>
    <div style={{ flex: 1 }}>
      <Text size="xs" color="dimmed" weight={400}>
        HI
      </Text>
      {/* <TestButton /> */}
    </div>

    <Checkbox onChange={() => {}} checked={selected} />

    {/* <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {data.label}
          </Text>
            <Button>
          <Text size="xs"  weight={400}>
                Start
          </Text>
            </Button>
        </div> */}
  </Group>
);

function Demo(props: { indata: TransferListData }) {
  const [data, setData] = useState<TransferListData>(initialValues);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <TransferList
      value={data}
      onChange={setData}
      itemComponent={ItemComponent}
      searchPlaceholder="Search..."
      nothingFound="Nothing here"
      titles={[t('file.opened'), t('file.analyzed')]}
      breakpoint="sm"
      showTransferAll={false}
      //   searchValues={["aa","bbb"]}
      listHeight={500}
    />
  );
}

export default Demo;
