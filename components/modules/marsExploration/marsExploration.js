"use client";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Flexbox from "@/components/ui/flexbox/flexbox";
import classes from "./marsExploration.module.css";

import MarsImageGallery from "./marsImageGallery";
import { roverCameras, rovers } from "./constants";

const MarsExploration = () => {
  const [selectedRoverCameras, setselectedRoverCameras] =
    useState(roverCameras);
  const [roverModel, setRoverModel] = useState(rovers[0].model);
  const onRoverChangeHandler = (e) => {
    const { value } = e.target;
    const selectedRover = rovers.find((rover) => rover.value === value);
    const cameras = roverCameras.filter((camera) =>
      camera.rover.includes(value)
    );
    setselectedRoverCameras(cameras);
    setRoverModel(selectedRover.model);
  };

  return (
    <div>
      <h2>MarsExploration</h2>
      <Flexbox gap={10} justifyContent="initial">
        <Card className={classes["rover-gallery-wrapper"]}>
          <Card.Header>
            <Card.Title>Rover</Card.Title>
            <Flexbox gap={10} justifyContent="space-between">
              <Flexbox
                gap={10}
                alignItems="center"
                justifyContent="space-between"
                classProp={classes["rover-select-wrapper"]}
              >
                <label>Rover</label>
                <Form.Select
                  aria-label="Rover"
                  className={classes["rover-select"]}
                  onChange={onRoverChangeHandler}
                >
                  {rovers.map((rover) => (
                    <option key={rover.value} value={rover.value}>
                      {rover.name}
                    </option>
                  ))}
                </Form.Select>
              </Flexbox>
              <Flexbox
                alignItems="center"
                gap={10}
                classProp={classes["camera-select-wrapper"]}
              >
                <label>Camera</label>
                <Form.Select
                  aria-label="Camera"
                  className={classes["camera-select"]}
                >
                  {selectedRoverCameras.map((camera) => (
                    <option key={camera.value} value={camera.value}>
                      {camera.name}
                    </option>
                  ))}
                </Form.Select>
              </Flexbox>
              <Flexbox
                alignItems="center"
                gap={10}
                classProp={classes["sol-input-wrapper"]}
                title="3760 is the max value"
              >
                <label>Sol</label>
                <Form.Control
                  type="number"
                  maxLength={4}
                  id="sol-input"
                  className={classes["sol-input"]}
                />
              </Flexbox>
            </Flexbox>
          </Card.Header>
          <Card.Body>
            <MarsImageGallery />
          </Card.Body>
        </Card>
        <div className={classes["rover-model-wrapper"]}>
          <div className={classes["rover-model"]}>
            <iframe src={roverModel} width="100%" height="500px" />
          </div>
          <Flexbox justifyContent="initial">
            <div className={classes["model-flex-item-wrapper"]}>
              <h5>Is Active</h5>
              <label>Yes</label>
              <hr />
              <h5>Launch Date</h5>
              <label>AMOR</label>
              <hr />
            </div>
            <div className={classes["model-flex-item-wrapper"]}>
              <h5>Landing Date</h5>
              <label>2.1234 km</label>
              <hr />
              <h5>Landing Site</h5>
              <label>Gale crater</label>
              <hr />
            </div>
          </Flexbox>
          <p>
            <strong>*Sol</strong> is a solar day on Mars.A sol is slightly
            longer than an Earth day. It is approximately 24 hours, 39 minutes,
            35 seconds long
          </p>
        </div>
      </Flexbox>
    </div>
  );
};

export default MarsExploration;
