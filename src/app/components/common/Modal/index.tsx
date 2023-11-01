import React from 'react';
import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: "none",
    padding: "0px",
    borderRadius: "20px"
  },
};

type ModalProps =  {
  isOpen: boolean
  onClose: () => void
  children: any
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
      >
        {children}
      </ReactModal>
    </div>
  );
}

export default Modal