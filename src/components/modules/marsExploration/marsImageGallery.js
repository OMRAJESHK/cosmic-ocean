import React, { useState } from "react";
import Slider from "react-slick";
import classes from "./marsExploration.module.css";
import CustomImage from "@/components/ui/customImage";
import PropTypes from "prop-types";
import Loader from "@/components/ui/loader";
import Flexbox from "@/components/ui/flexbox/flexbox";
import NotFound from "assets/svgs/notFound";

const MarsImageGallery = (props) => {
  const { marsPhotos = [], isLoading } = props;

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  return (
    <div>
      {isLoading && <Loader height="600px" />}
      {!isLoading && marsPhotos?.length === 0 && (
        <Flexbox
          justifyContent="center"
          alignItems="center"
          styleProp={{ height: "100%" }}
        >
          <NotFound width={600} height={600} />
        </Flexbox>
      )}
      {marsPhotos?.length > 0 && (
        <div>
          <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
            {marsPhotos.map((marsPhoto) => {
              return (
                <div key={marsPhoto.id}>
                  <div className={classes["rover-hero-img-wrapper"]}>
                    <CustomImage
                      src={marsPhoto.img_src}
                      alt="photo"
                      classProp={classes["rover-hero-img"]}
                      width={900}
                      height={900}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
          <Slider
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            slidesToShow={
              [1, 2, 3, 4, 5, 6].includes(marsPhotos.length)
                ? marsPhotos.length
                : 6
            }
            swipeToSlide={true}
            focusOnSelect={true}
          >
            {marsPhotos.map((marsPhoto) => (
              <div key={marsPhoto.id}>
                <div className={classes["img-gallery-wrapper"]}>
                  <CustomImage
                    src={marsPhoto.img_src}
                    alt="photo"
                    classProp={classes["rover-img"]}
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};
MarsImageGallery.propTypes = {
  marsPhotos: PropTypes.array,
  isLoading: PropTypes.bool,
};
export default MarsImageGallery;
