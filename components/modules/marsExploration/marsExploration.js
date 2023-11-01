"use client";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Flexbox from "@/components/ui/flexbox/flexbox";
import classes from "./marsExploration.module.css";

import MarsImageGallery from "./marsImageGallery";
import { roverCameras, rovers } from "./constants";
import { GET, withCatch } from "@/api/services";
import apiLocations from "@/api/apiDirectory";

const MarsExploration = () => {
  const defaultCameras = roverCameras.filter((camera) =>
    camera.rover.includes("curiosity"),
  );
  const [selectedRoverCameras, setSelectedRoverCameras] =
    useState(defaultCameras);
  const [selectedRover, setSelectedRover] = useState(rovers[0].value);
  const [roverCamera, setRoverCamera] = useState(defaultCameras[0].value);
  const [sol, setSol] = useState(1);
  const page = 1;
  const [marsPhotos, setMarsPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const params = {
      rover: rovers[0].value,
      camera: defaultCameras[0].value,
      sol: 10,
      page,
    };
    getMarsPhotos(params);
  }, []);
  const selectedRoverObj = rovers.find(
    (rover) => rover.value === selectedRover,
  );
  const roverModel = selectedRoverObj?.model;
  const landingSite = rovers.find(
    (rover) => rover.value === selectedRover,
  )?.landingSite;
  const clearPhotos = () => setMarsPhotos([]);

  const getMarsPhotos = async (params = {}) => {
    try {
      const { error, response } = await withCatch(
        GET,
        apiLocations.GET_MARS_PHOTOS(),
        params,
      );
      if (response?.status === 200) {
        setMarsPhotos(response?.data?.photos ?? []);
        setIsLoading(false);
        return;
      }
    } catch (err) {
      console.log("error", err);
      setIsLoading(false);
      setMarsPhotos([]);
    }
  };
  const onRoverChangeHandler = (e) => {
    const { value } = e.target;
    const cameras = roverCameras.filter((camera) =>
      camera.rover.includes(value),
    );
    setSelectedRoverCameras(cameras);
    setSelectedRover(value);
    const params = {
      rover: value,
      camera: roverCamera,
      sol: sol,
      page,
    };
    clearPhotos();
    getMarsPhotos(params);
  };
  const onCameraChangeHandler = (e) => {
    const { value } = e.target;
    setRoverCamera(value);
    const params = {
      rover: selectedRover,
      camera: value,
      sol: sol,
      page,
    };
    clearPhotos();
    getMarsPhotos(params);
  };

  const onSolChangeHandler = (e) => {
    const { value } = e.target;
    if (value.length <= 4) {
      setSol(value);
      const params = {
        rover: selectedRover,
        camera: roverCamera,
        sol: value,
        page,
      };
      clearPhotos();
      getMarsPhotos(params);
    }
  };

  return (
    <div className={classes["mars-exploration-wrapper"]}>
      <Flexbox gap={10} justifyContent="initial">
        <Card className={classes["rover-gallery-wrapper"]}>
          <Card.Header>
            <Card.Title>Mars Exploration</Card.Title>
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
                justifyContent="space-between"
                alignItems="center"
                gap={10}
                classProp={classes["camera-select-wrapper"]}
              >
                <label>Camera</label>
                <Form.Select
                  aria-label="Camera"
                  className={classes["camera-select"]}
                  onChange={onCameraChangeHandler}
                >
                  {selectedRoverCameras.map((camera) => (
                    <option key={camera.value} value={camera.value}>
                      {camera.name}
                    </option>
                  ))}
                </Form.Select>
              </Flexbox>
              <Flexbox
                justifyContent="space-between"
                alignItems="center"
                gap={10}
                classProp={classes["sol-input-wrapper"]}
                title={`${selectedRoverObj?.maxSol} is the max Sol`}
              >
                <label>Sol</label>
                <Form.Control
                  value={sol}
                  type="number"
                  maxLength={4}
                  id="sol-input"
                  className={classes["sol-input"]}
                  onChange={onSolChangeHandler}
                  placeholder="day on mars"
                />
              </Flexbox>
            </Flexbox>
          </Card.Header>
          <Card.Body>
            <MarsImageGallery marsPhotos={marsPhotos} isLoading={isLoading} />
          </Card.Body>
        </Card>
        <div className={classes["rover-model-wrapper"]}>
          <div className={classes["rover-model"]}>
            <iframe src={selectedRoverObj?.model} width="100%" height="500px" />
          </div>
          <div className={classes["rover-additional-info-wrapper"]}>
            <Flexbox justifyContent="initial">
              <div className={classes["model-flex-item-wrapper"]}>
                <h5>Is Active</h5>
                <label>{selectedRoverObj?.isActive ? "Yes" : "No"}</label>
                <hr />
                <h5>Landing Site</h5>
                <label>{selectedRoverObj?.landingSite}</label>
                <hr />
              </div>
              <div className={classes["model-flex-item-wrapper"]}>
                <h5>Launch Date</h5>
                <label>{selectedRoverObj?.launchDate}</label>
                <hr />
                <h5>Landing Date</h5>
                <label>{selectedRoverObj?.landingDate}</label>
                <hr />
              </div>
            </Flexbox>
            <p>
              <strong>*Sol</strong> is a solar day on Mars.A sol is slightly
              longer than an Earth day.
            </p>
          </div>
        </div>
      </Flexbox>
    </div>
  );
};

export default MarsExploration;
