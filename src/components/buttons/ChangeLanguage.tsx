import { ActionIcon, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

function ChangeLanguageButton() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'hr' : 'en');
  };

  return (
    <>
      <ActionIcon
        variant="outline"
        color="orange"
        onClick={() => toggleLanguage()}
        title="Toggle language"
      >
        <Text size={'xs'}>{i18n.language === 'en' ? 'EN' : 'HR'}</Text>
      </ActionIcon>
    </>
  );
}

export default ChangeLanguageButton;
