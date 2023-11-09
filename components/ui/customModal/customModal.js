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
      aria-labelledby={`custom-modal-${title}`}
      centered
    >
      <Modal.Header closeButton>
        <div className={classes["modal-title-wrapper"]}>
          <h3 id={`custom-modal-${title}`}>{title}</h3>
          <p className={classes["modal-subtitle"]}>{subtitle}</p>
        </div>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button
          onClick={onHide}
          variant="warning"
          style={{ backgroundColor: "var(--orange)", color: "var(--white)" }}
        >
          Close
        </Button>
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
