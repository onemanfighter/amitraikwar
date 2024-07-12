import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { ModalProps } from './types';
import { SearchModal } from './Modals';
import { ModalIDs } from '@store';

const ModalComponent = ({ isOpen, modalID, onModalClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onModalClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalToShow modalID={modalID} />
      </ModalContent>
    </Modal>
  );
};

const ModalToShow = ({ modalID }: { modalID: ModalIDs }) => {
  switch (modalID) {
    case ModalIDs.SEARCH:
      return <SearchModal />;
    default:
      return <></>;
  }
};

export default ModalComponent;
