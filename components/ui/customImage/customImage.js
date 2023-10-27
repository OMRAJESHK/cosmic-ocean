import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import loading from "@/assets/gifs/loading.gif";

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

  return (
    <>
      {error ? (
        <p>Image Failed</p>
      ) : (
        <Image
          className={`${classProp && classProp}`}
          src={isLoading ? loading : src}
          alt={alt}
          width={width}
          height={height}
          onLoad={onImageLoad}
          onError={onImageError}
          {...restProps}
        />
      )}
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
