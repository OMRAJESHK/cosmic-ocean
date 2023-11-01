import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import NotFound from "@/assets/svgs/notFound";
import Flexbox from "../flexbox/flexbox";
import Loader from "../loader";

const CustomImage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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
    setIsError(false);
    onLoad();
  };
  const onImageError = () => {
    setIsLoading(false);
    setIsError(true);
    onError();
  };

  return (
    <>
      {isLoading && !src && <Loader height={"100%"}/>}
      {!isError && src && (
        <Image
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
      {isError && (
        <Flexbox
          justifyContent="center"
          alignItems="center"
          styleProp={{ height: "100%" }}
        >
          <NotFound width={500} height={300} />
        </Flexbox>
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
  restProps: PropTypes.object,
};

export default CustomImage;
