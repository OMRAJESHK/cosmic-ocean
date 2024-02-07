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
import RoverModel from "./components/roverModel";
import RoverInfoWrapper from "./components/roverInfoWrapper";
import Select from "./components/select";

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

  const clearPhotos = () => setMarsPhotos([]);

  const getMarsPhotos = async (params = {}) => {
    try {
      // eslint-disable-next-line no-unused-vars
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
            <div className={classes["mars-title-wrapper"]}>
              <h2>Mars Exploration</h2>
            </div>
            <Card.Title></Card.Title>
            <Flexbox gap={10} justifyContent="space-between">
              <Select
                label="Rover"
                data={rovers}
                onChange={onRoverChangeHandler}
              />
              <Select
                label="Camera"
                data={selectedRoverCameras}
                onChange={onCameraChangeHandler}
              />
              <Flexbox
                justifyContent="space-between"
                alignItems="center"
                gap={10}
                classProp={classes["sol-input-wrapper"]}
                title={`${selectedRoverObj?.maxSol} is the max Sol`}
              >
                <label>Sol</label>
                <Form.Control
                  id="sol-input"
                  value={sol}
                  type="number"
                  maxLength={4}
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
          <RoverModel selectedRoverObj={selectedRoverObj} />
          <RoverInfoWrapper roverObj={selectedRoverObj} />
        </div>
      </Flexbox>
    </div>
  );
};

export default MarsExploration;
