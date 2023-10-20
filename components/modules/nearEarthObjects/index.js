"use client";
import React from "react";
import Card from "react-bootstrap/Card";

import classes from "./nearEarthObjects.module.css";
import Flexbox from "@/components/ui/flexbox/flexbox";

const NearEarthObjects = () => {
  return (
    <div className={classes["container"]}>
      <h2>
        Near-Earth Objects (NEOs) are a group of celestial objects that have
        orbits that bring them into proximity with Earth. NEOs can be classified
        into three main categories: asteroids, comets, and meteoroids. These
        objects are of particular interest to scientists and astronomers because
        of their potential to impact Earth and the valuable insights they can
        provide about the early solar system.
      </h2>

      <Flexbox gap={10}>
        <div className={classes["orbital-class-item-wrapper"]}>
          <Card>
            <Card.Header>Atira or Interior-Earth Objects (IEOs)</Card.Header>
            <Card.Body className={classes["orbital-class-item"]}>
              <Flexbox gap={10} alignItems="stretch">
                <div className={classes["orbital-class-item--text"]}>
                  <Card.Title>Less than 1 astronomical unit</Card.Title>
                  <Card.Text>
                    These NEOs have orbits that entirely lie within Earth's
                    orbit. In other words, they stay closer to the Sun than
                    Earth. The semi-major axis of their orbits is less than 1
                    astronomical unit (AU), and they never venture beyond
                    Earth's orbit.
                  </Card.Text>
                </div>
                <div className={classes["orbital-class-item--img"]}>
                  <img
                    src="https://plus.unsplash.com/premium_photo-1696863122595-f980e13edf88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
                    alt=""
                  />
                </div>
              </Flexbox>
            </Card.Body>
          </Card>
        </div>
        <div className={classes["orbital-class-item-wrapper"]}>
          <Card>
            <Card.Header>Amor</Card.Header>
            <Card.Body className={classes["orbital-class-item"]}>
              <Flexbox gap={10} alignItems="stretch">
                <div className={classes["orbital-class-item--text"]}>
                  <Card.Title>Between 1.017 and 1.3 AU</Card.Title>
                  <Card.Text>
                    Amor asteroids have orbits that approach but do not cross
                    Earth's orbit. Their orbits typically have a perihelion
                    distance (closest approach to the Sun). They come close to
                    Earth's orbit without intersecting it.
                  </Card.Text>
                </div>
                <div className={classes["orbital-class-item--img"]}>
                  <img
                    src="https://plus.unsplash.com/premium_photo-1696863122595-f980e13edf88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
                    alt=""
                  />
                </div>
              </Flexbox>
            </Card.Body>
          </Card>
        </div>
        <div className={classes["orbital-class-item-wrapper"]}>
          <Card>
            <Card.Header>Apollo</Card.Header>
            <Card.Body className={classes["orbital-class-item"]}>
              <Flexbox gap={10} alignItems="stretch">
                <div className={classes["orbital-class-item--text"]}>
                  <Card.Title>Greater than 1 AU</Card.Title>
                  <Card.Text>
                    Apollo asteroids have orbits that cross Earth's orbit. Their
                    eccentric orbits bring them near Earth. They have a wide
                    range of perihelion distances.
                  </Card.Text>
                </div>
                <div className={classes["orbital-class-item--img"]}>
                  <img
                    src="https://plus.unsplash.com/premium_photo-1696863122595-f980e13edf88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
                    alt=""
                  />
                </div>
              </Flexbox>
            </Card.Body>
          </Card>
        </div>
        <div className={classes["orbital-class-item-wrapper"]}>
          <Card>
            <Card.Header>Aten</Card.Header>
            <Card.Body className={classes["orbital-class-item"]}>
              <Flexbox gap={10} alignItems="stretch">
                <div className={classes["orbital-class-item--text"]}>
                  <Card.Title>less than 1 AU</Card.Title>
                  <Card.Text>
                    Aten asteroids are similar to Apollo asteroids. Tthey spend
                    more time within Earth's orbit. They often have orbits that
                    bring them within Earth's vicinity.
                  </Card.Text>
                </div>
                <div className={classes["orbital-class-item--img"]}>
                  <img
                    src="https://plus.unsplash.com/premium_photo-1696863122595-f980e13edf88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
                    alt=""
                  />
                </div>
              </Flexbox>
            </Card.Body>
          </Card>
        </div>
      </Flexbox>
      <Card>
        <Card.Header>Aten</Card.Header>
        <Card.Body className={classes["orbital-class-item"]}>
          <table className={classes["neo-table"]}>
            <thead>
              <th>Name</th>
              <th>Estimated Diameter</th>
              <th>Close Approach</th>
              <th>Is Hazardious</th>
              <th>Oribital Class</th>
            </thead>
            <tbody>
              <tr>
                <td>2019Ab</td>
                <td>100m</td>
                <td>21-10-2023</td>
                <td>false</td>
                <td>Aten</td>
              </tr>
              <tr>
                <td>2019Ab</td>
                <td>100m</td>
                <td>21-10-2023</td>
                <td>false</td>
                <td>Aten</td>
              </tr>
              <tr>
                <td>3245JH</td>
                <td>100m</td>
                <td>21-10-2023</td>
                <td>false</td>
                <td>Aten</td>
              </tr>
            </tbody>
          </table>
        </Card.Body>
        <Card.Footer>pagination</Card.Footer>
      </Card>

      <ul>
        <li>From Date and To Date</li>
        <li>
          Retrieve a list of Asteroids based on their closest approach date to
          Earth.
        </li>
        <li>
          Lookup a specific Asteroid based on its NASA JPL small body (SPK-ID)
          ID
        </li>
        <li>Browse the overall Asteroid data-set</li>
      </ul>
    </div>
  );
};

export default NearEarthObjects;
