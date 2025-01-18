import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { LinkButton } from '@components';

const NavigationBar = ({
  handleCharacterClick: handlerCharacterClick,
}: {
  handleCharacterClick: (type: 'adam' | 'lieutenant') => void;
}) => {
  return (
    <HStack
      position={'fixed'}
      marginY={8}
      w={'100%'}
      px={10}
      justifyContent={'space-between'}
    >
      <LinkButton text={'amitraikwar.in'} href={'#'} fontSize={'xl'} />
      <HStack columnGap={6}>
        <LinkButton
          key={'about'}
          text={'About'}
          href={'#about'}
          fontSize={'xl'}
          animationOnHover
        />
        <LinkButton
          key={'work'}
          text={'Work'}
          href={'#work'}
          fontSize={'xl'}
          animationOnHover
        />
        <LinkButton
          key={'contact'}
          text={'Contact'}
          href={'#contact'}
          fontSize={'xl'}
          animationOnHover
        />
        <LinkButton
          key={'articles'}
          text={'Articles'}
          href={'#articles'}
          fontSize={'xl'}
          animationOnHover
        />
        <Menu>
          <MenuButton>
            <LinkButton
              key={'more'}
              text={'Character'}
              href={'#more'}
              fontSize={'xl'}
              withUnderline
            />
          </MenuButton>
          <MenuList
            style={{
              backgroundColor: 'transparent',
              color: 'violet',
              padding: '0px',
              boxShadow: '0px 0px 20px 8px violet',
            }}
          >
            <MenuItem onClick={() => handlerCharacterClick('adam')}>
              <Text key={'adam'} fontSize={'xl'}>
                Adam
              </Text>
            </MenuItem>
            <MenuItem onClick={() => handlerCharacterClick('lieutenant')}>
              <Text key={'Lieutenant'} fontSize={'xl'}>
                Lieutenant
              </Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </HStack>
  );
};

export default NavigationBar;
