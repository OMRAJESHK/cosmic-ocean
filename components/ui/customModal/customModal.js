import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CustomModal = (props) => {
  const {
    size = "lg",
    show = false,
    onHide = () => {},
    title = "Modal heading",
    children,
  } = props;
  return (
    <Modal
      show={show}
      onHide={onHide}
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

CustomModal.propTypes = {
  size: PropTypes.string,
  onHide: PropTypes.func,
  show: PropTypes.bool,
};

export default CustomModal;
