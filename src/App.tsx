import React, {useState} from 'react';
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";


function App() {
  const [showModal, setShowModal] = useState(false);

  const clickShowModal = () => {
    setShowModal(true)
  }

  const clickCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="App">
      <h2>Modal</h2>
      <Button onClick={clickShowModal}>buttonModal</Button>

      <Modal
        show={showModal}
        title="Some kinda modal title"
        onClose={clickCloseModal}
      >
        <p>This is modal content</p>
      </Modal>

      <h3>Alert</h3>
    </div>
  );
}

export default App;
