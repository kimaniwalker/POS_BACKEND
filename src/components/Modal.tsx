import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    height: '75%',
    width: '75%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#yourAppElement');

export const MyModal = () => {
  
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
   
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div id='yourAppElement'>
      <Button onClick={openModal}>Schedule a consulation</Button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <iframe src="https://calendly.com/key2designio" width="100%" height="100%" style={{margin: 0 , padding: 0, border: 0}}/>
      </Modal>
    </div>
  );
}
const Button = styled.button`
    text-align: center;
  color: white;
  font-size: 1em;
  margin: 1em;
  min-height: 50px;
  width: 200px;
  padding: 0.25em 1em;
  border: 2px solid #8b52ff;
  background-color: #8b52ff;
  border-radius: 48px;
  display: block;
  position: fixed;
  bottom: 0;
  right: 0;

  :hover {
    cursor: pointer;
  }
`
