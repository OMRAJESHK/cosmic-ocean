import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import classes from "./marsExploration.module.css";
import CustomImage from "@/components/ui/customImage";
const MarsImageGallery = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //   function SampleNextArrow(props) {
  //     const { className, style, onClick } = props;
  //     return (
  //       <div
  //         className={className}
  //         style={{ ...style, display: "block", backgroundColor: "red" }}
  //         onClick={onClick}
  //       />
  //     );
  //   }

  function SampleNextArrow(props) {
    return <div onClick={props.onClick}>&gt;</div>;
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div>
      <Slider
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        // nextArrow={<SampleNextArrow />}
        // prevArrow={<SamplePrevArrow />}
      >
        <div>
          <div className={classes["rover-hero-img-wrapper"]}>
            <CustomImage
              src="https://apod.nasa.gov/apod/image/2310/M33_Triangulum1024.jpg"
              alt="photo"
              classProp={classes["rover-hero-img"]}
              width={900}
              height={900}
              onLoad={() => {}}
              onError={() => console.log("Image Loading Failed...!")}
            />
          </div>
        </div>
        <div>
          <div className={classes["rover-hero-img-wrapper"]}>
            <CustomImage
              src="https://apod.nasa.gov/apod/image/2310/IoFlyby_Juno_960.jpg"
              alt="photo"
              classProp={classes["rover-hero-img"]}
              width={900}
              height={900}
              onLoad={() => {}}
              onError={() => {}}
            />
          </div>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <Slider
        style={{ backgroundColor: "red" }}
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={6}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div>
          <div className={classes["img-gallery-wrapper"]}>
            <CustomImage
              src="https://apod.nasa.gov/apod/image/2310/M33_Triangulum1024.jpg"
              alt="photo"
              classProp={classes["rover-img"]}
              width={400}
              height={400}
              onLoad={() => {}}
              onError={() => {}}
            />
          </div>
        </div>
        <div>
          <div className={classes["img-gallery-wrapper"]}>
            <CustomImage
              src="https://apod.nasa.gov/apod/image/2310/IoFlyby_Juno_960.jpg"
              alt="photo"
              classProp={classes["rover-img"]}
              width={400}
              height={400}
              onLoad={() => {}}
              onError={() => {}}
            />
          </div>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default MarsImageGallery;
