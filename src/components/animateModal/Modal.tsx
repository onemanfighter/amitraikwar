import ReactPlayer from 'react-player';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from './AnimatedModal';
import { Button, Heading } from '@chakra-ui/react';

const AnimatedModal = ({
  triggerText,
  title,
  videoUrl,
  websiteUrl,
}: {
  triggerText: string;
  title: string;
  videoUrl: string;
  websiteUrl: string;
}) => {
  return (
    <div className="py-40 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="text-center transition duration-500">
            {triggerText}
          </span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <Heading
              fontSize="xl"
              className="text-center text-white"
              marginBottom={'4'}
            >
              {title}
            </Heading>
            <ReactPlayer
              controls
              url={videoUrl}
              style={{
                margin: 'auto',
              }}
            />
          </ModalContent>
          <ModalFooter>
            <Button
              as="a"
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28"
            >
              Visit website
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AnimatedModal;
