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
  Loader,
  TransferListItem,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { StatsGrid } from '../components/view/Stats';
import { StatsCard } from '../components/view/StatsCard';
import { IconFile, IconFileCheck } from '@tabler/icons';
import { useLocalStorage } from '@mantine/hooks';
import { AssessFile } from '../common/interfaces';

// const mockdata = [
//   {
//     value: 'bender',
//     image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
//     label: 'Bender Bending Rodríguez',
//     description: 'Fascinated with cooking, though has no sense of taste',
//     x: "",
//     poop: "c"
//   },

//   {
//     value: 'carol',
//     image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
//     label: 'Carol Miller',
//     description: 'One of the richest people on Earth',
//     poop: "a"
//   },
//   // ...other items
// ];

// const initialValues: TransferListData = [
//   //   [
//   //     { value: 'react', label: 'React' },
//   //     { value: 'ng', label: 'Angular' },
//   //     { value: 'next', label: 'Next.js' },
//   //     { value: 'blitz', label: 'Blitz.js' },
//   //     { value: 'gatsby', label: 'Gatsby.js' },
//   //     { value: 'vue', label: 'Vue' },
//   //     { value: 'jq', label: 'jQuery' },
//   //   ],
//   //   [
//   //     { value: 'sv', label: 'Svelte' },
//   //     { value: 'rw', label: 'Redwood' },
//   //     { value: 'np', label: 'NumPy' },
//   //     { value: 'dj', label: 'Django' },
//   //     { value: 'fl', label: 'Flask' },
//   //   ],
//   [...mockdata],
//   [],
// ];

const onSelectUh = (aaa: any) => {
  console.log(aaa);
};

const ItemComponent: TransferListItemComponent = ({ data, selected }: TransferListItemComponentProps) => (
  <Group noWrap>
    {selected ? <IconFileCheck color={"orange"} /> : <IconFile />}
    <div style={{ flex: 7 }} >
      <Text size="sm" weight={500}>
        {data.name}
      </Text>
      <Text size="xs" color="dimmed" weight={400}>
        {data.size}
      </Text>
    </div>
    <div style={{ flex: 1 }}>
      <Text size="xs" color="dimmed" weight={400}>
        {data.size}
      </Text>
    </div>
    <div style={{ flex: 1 }}>
      <Loader size={'xs'} />
    </div>

    {/* <Checkbox onChange={() => {}} checked={selected} /> */}
  </Group>
);

function Analyze() {
  const { t, i18n } = useTranslation();
  
  const [files, setFiles] = useLocalStorage<AssessFile[]>({
    key: 'loaded-file',
    defaultValue: [],
  });
  
  const [data, setData] = useState<TransferListData>([
    files, []
  ]);

  useEffect(()=>{
    console.log("FILES")
    console.log(files)
    setData([files,[]])
  }, [files])

  useEffect(()=>{
    console.log("DATA")
    console.log(data)
  }, [data])

  return (
    <Group>
      <TransferList
        value={data}
        onChange={setData}
        itemComponent={ItemComponent}
        searchPlaceholder="Search..."
        nothingFound="Nothing here"
        titles={[t('file.opened'), t('file.analyzed')]}
        breakpoint="sm"
        w={'100%'}
        showTransferAll={false}
        //   searchValues={["aa","bbb"]}
        listHeight={300}
      />
      {/* <StatsGrid  /> */}
      <StatsCard />
      <StatsCard />
      <StatsCard />
      <StatsCard />
    </Group>
  );
}

export default Analyze;
