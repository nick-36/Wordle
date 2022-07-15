import React from "react";

function Navbar({ showModal, setShowModal }) {
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <nav>
        <div className="navbar">
          <ul className="nav_items">
            <div className="nav_left">
              <li className="nav_item nav_item-burger">
                <div className="burger"></div>
                <div className="burger"></div>
                <div className="burger"></div>
              </li>
              <li className="nav_item">
                <i
                  className="fa-solid fa-circle-question icon-help"
                  onClick={handleShowModal}
                ></i>
              </li>
            </div>

            <li className="nav_item">
              <h1 className="heading">Wordle</h1>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Navbar;
