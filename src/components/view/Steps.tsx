import { Timeline, Text, Button, Center, FileInput } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { IconCloudDownload, IconEye, IconCloudUpload, IconAnalyze } from '@tabler/icons';
import { useTranslation } from 'react-i18next';

interface StepProps {
    active: number;
}

function Steps() {
  const { t } = useTranslation();

  const [step, setStep] = useLocalStorage<JSX.Element>({
    key: 'current-step',
    defaultValue: <FileInput/>,
  })

  const [active, setActive] = useLocalStorage<number>({
    key: 'current-active-step-number',
    defaultValue: 0,
  })
  
  return (
    <Timeline active={active} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconCloudUpload size={12} />} title={t("steps.0.title")}>
        <Text color="dimmed" size="sm">{t("steps.0.subtitle")}</Text>
        {/* <Text size="xs" mt={4}>2 hours ago</Text> */}
        <Button mt={10} size='xs' onClick={()=>setActive(1)} fullWidth disabled={active!==0}>{t("steps.0.action")}</Button>
      </Timeline.Item>

      <Timeline.Item bullet={<IconAnalyze size={12} />} title={t("steps.1.title")}>
        <Text color="dimmed" size="sm">{t("steps.1.subtitle")}</Text>
        {/* <Text size="xs" mt={4}>52 minutes ago</Text> */}
        <Button mt={10} size='xs' onClick={()=>setActive(2)} fullWidth disabled={active!==1}>{t("steps.1.action")}</Button>
      </Timeline.Item>

      <Timeline.Item title={t("steps.2.title")} bullet={<IconEye size={12} />} lineVariant="dashed">
        <Text color="dimmed" size="sm">{t("steps.2.subtitle")}</Text>
        {/* <Text size="xs" mt={4}>34 minutes ago</Text> */}
        <Button mt={10} size='xs' onClick={()=>setActive(3)} fullWidth disabled={active!==2}>{t("steps.2.action")}</Button>
      </Timeline.Item>

      <Timeline.Item title={t("steps.3.title")} bullet={<IconCloudDownload size={12} />}>
        <Text color="dimmed" size="sm">{t("steps.3.subtitle")}</Text>
        {/* <Text size="xs" mt={4}>12 minutes ago</Text> */}
        {/* <Text size="xs" mt={4}>12 minutes ago</Text> maybe add formats? .pdf .png etc */}
        <Button mt={10} size='xs' onClick={()=>setActive(0)} fullWidth disabled={active!==3}>{t("steps.3.action")}</Button>
      </Timeline.Item>
    </Timeline>
  );
}

export default Steps;