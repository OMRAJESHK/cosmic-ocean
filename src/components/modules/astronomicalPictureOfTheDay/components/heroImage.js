import React from "react";
import PropTypes from "prop-types";
import CustomImage from "@/components/ui/customImage";
import classes from "../apod.module.css";
import { Card } from "react-bootstrap";
import VideoPlayer from "./videoPlayer";
import Loader from "@/components/ui/loader";
import NotFound from "assets/svgs/notFound";
import Flexbox from "@/components/ui/flexbox/flexbox";

const HeroImage = ({
  isLoading = false,
  heroApod = {},
  onClick = () => {},
}) => {
  const ApodImgWrapper = () => {
    const copyrightText = `${heroApod?.copyright ? heroApod.copyright : ""}`;
    return (
      <>
        {isLoading && <Loader height="44.6rem" />}
        {heroApod?.media_type === "image" && (
          <div
            className={classes["apod-img-wrapper"]}
            onClick={() => onClick(heroApod?.id, true)}
          >
            <CustomImage
              src={heroApod?.url ?? ""}
              alt={heroApod.title}
              classProp={classes["apod-hero-img"]}
              width={800}
              height={800}
            />
            <Card.ImgOverlay>
              <h3 className={classes["apod-hero-img-desc"]}>
                {heroApod.title ?? ""}
              </h3>
              <Card.Text className={classes["apod-hero-img-desc"]}>
                {copyrightText}
              </Card.Text>
            </Card.ImgOverlay>
          </div>
        )}
        {heroApod?.media_type === "video" && (
          <VideoPlayer name={heroApod.title} src={heroApod?.url} />
        )}
      </>
    );
  };

  return (
    <div className={classes["apod-media-wrapper"]}>
      {heroApod?.code === 404 ? (
        <>
          <Flexbox
            justifyContent="center"
            alignItems="center"
            styleProp={{ height: "90%", width: "100%" }}
          >
            <div style={{ textAlign: "center" }}>
              <NotFound width={200} height={200} />
              <p style={{ color: "var(--orange)" }}>{heroApod?.msg}</p>
            </div>
          </Flexbox>
        </>
      ) : (
        <ApodImgWrapper />
      )}
    </div>
  );
};

HeroImage.propTypes = {
  heroApod: PropTypes.object,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default HeroImage;
