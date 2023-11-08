import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = ({ name = "", src = "" }) => {
  return (
    <object width="100%" height="100%">
      <param name={name} value={src} />
      <embed src={src} width="100%" height="100%" />
    </object>
  );
};

VideoPlayer.propTypes = { name: PropTypes.string, src: PropTypes.string };

export default VideoPlayer;
