import React, { useState, useEffect } from "react";
import "./App.css";
import Modal from "./Modal";

const App: React.FC = () => {
  const [isShowModal, setShowModal] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const [intervalHandler, setIntervalHandler] = useState<any>(null);
  const [timeout, setTimeoutHandler] = useState<any>(null);

  useEffect((): void => {
    setTimeoutHandler(setTimeout(timeoutFunction, 5000));
  }, []);

  function timeoutFunction() {
    console.log("Ending session...");
    setShowModal(true);
    setIntervalHandler(
      setInterval(() => {
        console.log("Increasing stuff");
        setProgressValue(progressValue => progressValue + 1);
      }, 1000)
    );
  }

  function restartSessionCounter() {
    clearInterval(intervalHandler);
    clearTimeout(timeout);
    setProgressValue(0);
    setShowModal(false);
    setTimeoutHandler(setTimeout(timeoutFunction, 5000));
  }

  function simulateHttp() {
    clearTimeout(timeout);
    setTimeoutHandler(setTimeout(timeoutFunction, 5000));
  }

  return (
    <div className="App">
      Chilling
      <button type="button" onClick={simulateHttp}>
        Simulate http call
      </button>
      <Modal show={isShowModal}>
        <div>Do you want to continue your session?</div>
        <progress value={progressValue} max={100}></progress>
        <button type="button" onClick={restartSessionCounter}>
          Continue session
        </button>
      </Modal>
    </div>
  );
};

export default App;
