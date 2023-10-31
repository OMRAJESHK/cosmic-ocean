import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import loading from "@/assets/gifs/loading.gif";
import NotFound from "@/assets/svgs/notFound";
import Flexbox from "../flexbox/flexbox";

const CustomImage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const {
    src = "",
    alt = "photo",
    width = 50,
    height = 50,
    classProp = "",
    onLoad = () => {},
    onError = () => {},
    restProps,
  } = props;

  const onImageLoad = () => {
    setIsLoading(false);
    setError(false);
    onLoad();
  };
  const onImageError = () => {
    setIsLoading(false);
    setError(true);
    onError();
  };

  console.log("srcsrcsrc", src);
  return (
    <>
      {error ? (
        <Flexbox
          justifyContent="center"
          alignItems="center"
          styleProp={{ height: "100%" }}
        >
          <NotFound width={500} height={300} />
        </Flexbox>
      ) : (
        <Image
          className={`${classProp && classProp}`}
          src={isLoading || !src ? loading : src}
          alt={alt}
          width={width}
          height={height}
          onLoad={onImageLoad}
          onError={onImageError}
          {...restProps}
        />
      )}
      {loading && <div></div>}
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
  restProps: PropTypes.object,
};

export default CustomImage;
