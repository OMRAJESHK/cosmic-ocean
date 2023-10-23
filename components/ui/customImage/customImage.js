import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const CustomImage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const {
    src = "#",
    alt = "photo",
    width = 50,
    height = 50,
    classProp = "",
    onLoad,
    onError,
    restProps,
  } = props;

  const onImageLoad = () => {
    console.log("onloading", src, isLoading);

    setIsLoading(false);
    setError(false);
    onLoad();
  };
  const onImageError = () => {
    setIsLoading(false);
    setError(true);
    onError();
  };
  console.log("isLoadingisLoading", src, isLoading, error);
  return (
    <>
      {!error && (
        <Image
          //   style={{ display: isLoading || error ? "none" : "block" }}
          className={`${classProp && classProp}`}
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={onImageLoad}
          onError={onImageError}
          {...restProps}
        />
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>Image Failed</p>}
    </>
  );
};

CustomImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  classProp: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
};

export default CustomImage;
