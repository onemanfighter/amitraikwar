import { ModalComponent } from '@components';
import { ModalIDs, ModalOpenState, appStore } from '@store';
import { modalSelector, useShallow } from '@selectors';

import { ModalProviderProps } from './types';
import { Modal, useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';

const ModalProvider = ({ children }: ModalProviderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    openState,
    modalID,
    onModalClose: onModalCloseHandler,
    closeModal,
  } = appStore(useShallow(modalSelector));

  const onModalClose = () => {
    onClose();
    onModalCloseHandler && onModalCloseHandler();
    closeModal();
  };
  useEffect(() => {
    if (openState === ModalOpenState.OPEN) {
      onOpen();
    } else {
      onModalClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openState, onOpen]);

  return (
    <>
      <ModalComponent
        modalID={modalID ? modalID : ModalIDs.NONE}
        onModalClose={onModalClose}
        isOpen={isOpen}
      />
      {children}
    </>
  );
};

export default ModalProvider;
