import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import classes from "./customModal.module.css";

const CustomModal = (props) => {
  const {
    size = "lg",
    show = false,
    onHide = () => {},
    subtitle = "",
    title = "Modal heading",
    fullscreen = undefined,
    children,
  } = props;

  return (
    <Modal
      fullscreen={fullscreen}
      show={show}
      onHide={onHide}
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <div>
          <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
          <p className={classes["modal-subtitle"]}>{subtitle}</p>
        </div>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

CustomModal.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  size: PropTypes.string,
  onHide: PropTypes.func,
  show: PropTypes.bool,
  fullscreen: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default CustomModal;
