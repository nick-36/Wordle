import React, { useState } from "react";

import { CSSTransition } from "react-transition-group";
import Board from "./Components/Board";
import Navbar from "./Components/Navbar";
import Modal from "./Components/Modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar showModal={showModal} setShowModal={setShowModal} />
      <ToastContainer autoClose={2000} style={{ fontSize: "1.6rem" }} />
      <CSSTransition
        in={showModal}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowModal(true)}
        onExited={() => setShowModal(false)}
      >
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </CSSTransition>
      <Board />
    </>
  );
}

export default App;
