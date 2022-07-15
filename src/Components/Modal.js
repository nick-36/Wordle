import React from "react";

function Modal({ showModal, setShowModal }) {
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="modal">
      <div className="modal_content">
        <i
          className="fa-solid fa-xmark btn-close "
          onClick={handleCloseModal}
        ></i>
        <div className="modal_header">
          <h2 className="modal_header--heading">How to Play</h2>
          <p>Guess the WORDLE in six tries.</p>
          <p>
            Each guess must be a valid five-letter word. Hit the enter button to
            submit.
          </p>
          <p>
            After each guess, the color of the tiles will change to show how
            close your guess was to the word.
          </p>
        </div>
        <hr className="modal_hr" />
        <div className="modal_main">
          <p className="modal_main--heading">Examples</p>
          <div className="example">
            <div className="example--1">
              <div className="example_tiles example_tiles--1">
                <span className="example_tile example_tile--correct">W</span>
                <span className="example_tile">E</span>
                <span className="example_tile">A</span>
                <span className="example_tile">R</span>
                <span className="example_tile">Y</span>
              </div>
              <p>The letter W is in the word and in the correct spot.</p>
            </div>
            <div className="example--2">
              <div className="example_tiles example_tiles--2">
                <span className="example_tile">P</span>
                <span className="example_tile example_tile--close">I</span>
                <span className="example_tile">L</span>
                <span className="example_tile">L</span>
                <span className="example_tile">S</span>
              </div>
              <p>The letter I is in the word but in the wrong spot.</p>
            </div>
            <div className="example--3">
              <div className="example_tiles example_tiles--3">
                <span className="example_tile">V</span>
                <span className="example_tile">A</span>
                <span className="example_tile">G</span>
                <span className="example_tile example_tile--incorrect">U</span>
                <span className="example_tile">E</span>
              </div>
              <p>The letter U is not in the word in any spot.</p>
            </div>
          </div>
        </div>
        <hr className=" modal_hr" />
        <h4 className="modal_footer-heading">
          Best Of Luck <i class="fa-solid fa-thumbs-up thumbs-up-icon"></i>
        </h4>
      </div>
    </div>
  );
}

export default Modal;
