import React, {useState} from 'react';
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import Alert from "./components/Alert/Alert";


function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showXAlert, setShowXAlert] = useState(false);

  const clickShowModal = () => {
    setShowModal(true)
  };

  const clickCloseModal = () => {
    setShowModal(false)
  };

  const clickContinue = () => {
    alert('Continue!');
  };

  const clickShowCloseAlert = () => {
    showAlert ? setShowAlert(false) : setShowAlert(true);
  }

  const clickCloseXAlert = () => {
    setShowXAlert(false)
  };

  const clickShowCloseXAlert = () => {
    showXAlert ? setShowXAlert(false) : setShowXAlert(true);
  };


  return (
    <div className="App py-5 px-5">
      <h2>Modal</h2>
      <Button onClick={clickShowModal} type={"secondary"}>ModalButton</Button>
      <Modal
        show={showModal}
        title="Some kinda modal title"
        onClose={clickCloseModal}
        buttons={[
          {type: 'primary',
            label: 'Continue',
            onClick: clickContinue
          },
          {type: 'danger',
            label: 'Close',
            onClick: clickCloseModal}
        ]}
      >
        <p>This is modal content</p>
      </Modal>
      <h3 className="mt-3">Alert</h3>
      <Alert onclick={clickShowCloseXAlert} type={"warning"} show={showXAlert} onDismiss={clickCloseXAlert}>{"This is a warning type alert"}</Alert>
      <Alert onclick={clickShowCloseAlert} type={"success"} show={showAlert}>{"This is a success type alert"}</Alert>
    </div>
  );
}

export default App;
