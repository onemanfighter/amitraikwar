import { Button } from '@chakra-ui/react';
import { useColorSelector } from '@components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HeaderText = () => {
  const { t } = useTranslation();
  const { text } = useColorSelector();

  return (
    <Button
      fontSize={'2xl'}
      as={Link}
      to={'/'}
      bgGradient={text.Hero}
      bgClip={'text'}
      fontWeight={'800'}
      fontFamily={'monospace'}
      variant={'ghost'}
      margin={'4'}
      padding={'6'}
      _hover={{
        bg: 'green.500',
        color: 'white',
        boxShadow: 'lg',
      }}
      transition={'all 0.3s'}
    >
      {t('MainHomeScreen.navigation.title')}
    </Button>
  );
};

export default HeaderText;
