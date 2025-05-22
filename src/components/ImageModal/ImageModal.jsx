import Modal from "react-modal";
import css from "./ImageModal.module.css";
Modal.setAppElement("#root");

const modalStyles = {
  overlay: {
    position: "fixed",
    backgroundColor: "rgba(50, 47, 66, 0.9)",
  },
  content: {
    position: "absolute",
    top: "60px",
    left: "200px",
    right: "200px",
    bottom: "60px",
    border: "none",
    overflow: "hidden",
    outline: "none",
    borderRadius: "10px",
    padding: "0px",
  },
};
const ImageModal = ({ modalIsOpen, closeModal, urlObj }) => {
  return (
    <Modal
      style={modalStyles}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnEsc={true}
      bodyOpenClassName={css.backdrop}
      closeTimeoutMS={500}
      className={{
        base: css.overlay,
        afterOpen: css.overlayAfter,
        beforeClose: css.overlayBefore,
      }}
    >
      <img src={urlObj.url} alt={urlObj.alt} />
    </Modal>
  );
};

export default ImageModal;
