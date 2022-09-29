import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent } from './Modal.styled';
import { IoIosClose } from 'react-icons/io';
import ButtonIcon from 'components/PhoneBook/ButtonIcon';
import Box from 'components/PhoneBook/Box';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({
  children = '',
  handleKeyDown = () => {},
  handleBackdropClick = () => {},
  closeModal = () => {},
}) {
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, isLoading]);

  return createPortal(
    <ModalBackdrop onClick={isLoading ? null : handleBackdropClick}>
      <ModalContent>
        <Box position="absolute" top="0" right="0" zIndex="100">
          <ButtonIcon
            type="button"
            onClick={isLoading ? null : closeModal}
            aria-label="close modal"
          >
            <IoIosClose size="40px" />
          </ButtonIcon>
        </Box>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.node,
};
