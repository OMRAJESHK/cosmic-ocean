"use client";
import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Flexbox from "@/components/ui/flexbox/flexbox";
import classes from "./marsExploration.module.css";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const MarsExploration = () => {
  const renderTooltip = (props) => <Tooltip {...props}>Simple tooltip</Tooltip>;

  return (
    <div>
      <h2>MarsExploration</h2>
      <Flexbox
        gap={10}
        justifyContent="initial"
        classProp={classes["mars-rover-wrapper"]}
      >
        <Card className={classes["mars-rover-wrapper-item"]}>
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
                >
                  <option value="1">Curiocity</option>
                  <option value="2">Opportunity</option>
                  <option value="3">Spirit</option>
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
                  <option value="1">ABCD</option>
                  <option value="2">MNOP</option>
                  <option value="3">WXYZ</option>
                </Form.Select>
              </Flexbox>
              <Flexbox
                alignItems="center"
                gap={10}
                classProp={classes["sol-input-wrapper"]}
              >
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <>
                    <label>Sol</label>
                    <Form.Control
                      type="number"
                      maxLength={4}
                      id="sol-input"
                      className={classes["sol-input"]}
                    />
                  </>
                </OverlayTrigger>
              </Flexbox>
            </Flexbox>
          </Card.Header>
          <Card.Body></Card.Body>
        </Card>
        <div className={classes["rover-modal-wrapper"]}>
          <div>
            <iframe
              src="https://mars.nasa.gov/gltf_embed/24584"
              width="100%"
              height="500px"
            />
          </div>
          <label>the rover modal</label>
        </div>
      </Flexbox>
      <h1>Features to add</h1>
      <ul>
        <li>landing_date</li>
        <li>launch_date</li>
        <li>total_photos</li>
        <li>Explore Mars by sol(Day on Mars) </li>
        <li>Explore Mars by Earth equivalent date for sol</li>
        <li>Search by Rovers(Curiosity, opportunity, spirit)</li>
        <li>Pagination</li>
        <li>Search Mars by camera </li>
        <li>List of camera is different for different rover</li>
        <li>
          useful data from api - image, camera name, camera full_name,
          earth_date
        </li>
      </ul>
    </div>
  );
};

export default MarsExploration;
