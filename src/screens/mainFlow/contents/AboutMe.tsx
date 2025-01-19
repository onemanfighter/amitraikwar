import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { useCursor } from '@components';
import { useIsIntersecting } from '@hooks';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIsIntersecting(containerRef);
  const { setCursorType } = useCursor();

  useEffect(() => {
    if (isIntersecting) {
      setCursorType('splash');
    }
  }, [isIntersecting, setCursorType]);

  return (
    <VStack ref={containerRef} minH={'100vh'} id="about" paddingTop={24}>
      <Box rowGap={10}>
        <Heading textAlign={'start'}>{t('about.title')}</Heading>
        <HStack>
          <Text>{t('about.aboutMe')}</Text>
        </HStack>
      </Box>
    </VStack>
  );
};

export default AboutMe;
