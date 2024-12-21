import ReactModal from "react-modal";
import css from "./Modal.module.css";
import { useEffect } from "react";

const Modal = ({ modalData, modalIsOpen, closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  }, []);

  return (
    <ReactModal
      ariaHideApp={false}
      overlayClassName={css.backdrop}
      className={css.modal}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <img src={modalData} alt="camper original photo" className={css.image} />
    </ReactModal>
  );
};

export default Modal;
