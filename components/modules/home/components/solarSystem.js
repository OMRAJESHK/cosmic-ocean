import React from "react";
import PropTypes from "prop-types";
import { Accordion } from "react-bootstrap";
import CustomImage from "@/components/ui/customImage";
import classes from "../home.module.css";
import solarSystem1 from "assets/images/home/solar-system-1.jpg";
import { solarSystemDesc } from "../constants";

const SolarSystemDescItem = ({ desc = "" }) => (
  <li>
    <p>{desc}</p>
  </li>
);

const SolarSystemDescWrapper = ({ data = [] }) => {
  if (data.length > 0)
    return (
      <ul className={classes["solar-system-desc-wrapper"]}>
        {data.map((description) => (
          <SolarSystemDescItem key={description.id} desc={description.desc} />
        ))}
      </ul>
    );
};

const SolarSystemImgWrapper = ({ src = "" }) => (
  <div className={classes["img-wrapper"]}>
    <CustomImage
      src={src}
      classProp={classes["solar-system-img"]}
      width={200}
      height={200}
    />
  </div>
);

const SolarSystemHeader = ({ title = "" }) => (
  <Accordion.Header className={classes["accordion-header"]}>
    {title}
  </Accordion.Header>
);

const SolarSystem = () => {
  return (
    <Accordion defaultActiveKey="0" id="solarSystemAccordion">
      <Accordion.Item eventKey="0">
        <SolarSystemHeader title="Understanding Solar System as Kids" />
        <Accordion.Body className={classes["accordion-body"]}>
          <div className={classes["solar-system-wrapper"]}>
            <article className={classes["article-wrapper"]}>
              <SolarSystemImgWrapper src={solarSystem1} />
              <SolarSystemDescWrapper
                data={solarSystemDesc.partA.filter((item) => item.id < 3)}
              />
            </article>
            <article className={classes["article-wrapper"]}>
              <SolarSystemImgWrapper src={solarSystem1} />
              <SolarSystemDescWrapper
                data={solarSystemDesc.partA.filter((item) => item.id >= 3)}
              />
            </article>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <SolarSystemHeader title="Understanding Solar System as amature Astronomers" />
        <Accordion.Body className={classes["accordion-body"]}>
          <div className={classes["solar-system-wrapper"]}>
            <article className={classes["article-wrapper"]}>
              <SolarSystemImgWrapper src={solarSystem1} />
              <SolarSystemDescWrapper
                data={solarSystemDesc.partB.filter((item) => item.id < 3)}
              />
            </article>
            <article className={classes["article-wrapper"]}>
              <SolarSystemImgWrapper src={solarSystem1} />
              <SolarSystemDescWrapper
                data={solarSystemDesc.partB.filter((item) => item.id >= 3)}
              />
            </article>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

SolarSystemDescWrapper.propTypes = {
  data: PropTypes.array,
};

SolarSystemDescItem.propTypes = {
  desc: PropTypes.string,
};
SolarSystemHeader.propTypes = {
  title: PropTypes.string,
};
SolarSystemImgWrapper.propTypes = {
  src: PropTypes.string,
};

export default SolarSystem;
