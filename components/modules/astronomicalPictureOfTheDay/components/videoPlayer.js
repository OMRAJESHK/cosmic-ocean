import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = ({ name = "", src = "" }) => {
  return (
    <div style={{ height: "100%" }}>
      <object width="100%" height="100%">
        <param name={name} value={src} />
        <embed src={src} width="100%" height="100%" />
      </object>
    </div>
  );
};

VideoPlayer.propTypes = { name: PropTypes.string, src: PropTypes.string };

export default VideoPlayer;
