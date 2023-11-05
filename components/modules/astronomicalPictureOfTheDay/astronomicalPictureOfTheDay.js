"use client";
import React, { useState, useEffect } from "react";
import classes from "./apod.module.css";
import Card from "react-bootstrap/Card";
import CustomImage from "@/components/ui/customImage";
import Flexbox from "@/components/ui/flexbox/flexbox";
import CustomModal from "@/components/ui/customModal";
import FullscreenApod from "./fullscreenApod";
import apiLocations from "@/api/apiDirectory";
import axios from "axios";

function getLastFourDates(currentDate) {
  let lastFourDates = [];
  [0, 1, 2, 3, 4].forEach((dateItem) => {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - dateItem);
    lastFourDates = [...lastFourDates, date.toISOString().split("T")[0]];
  });
  return lastFourDates;
}

export const multiApiCall = async (apis = []) => {
  const apiResults = [];
  if (apis.length < 0) return [];
  apis.map((api) => {
    const res = axios.get(api);
    apiResults.push(res);
  });
  return apiResults;
};

function getMultiApis(lastFourDates) {
  let urlList = [];
  lastFourDates.forEach((date) => {
    urlList = [...urlList, apiLocations.GET_APOD(date)];
  });
  return urlList;
}
const AstronomicalPictureOfTheDay = () => {
  const [modalShow, setModalShow] = useState(false);
  const [apodState, setApodState] = useState([]);
  const [selectedApod, setSelectedApod] = useState({});

  const onCardClickHandler = (id) => {
    setModalShow(true);
    const selected = apodState.find((apod) => apod.id === id);
    setSelectedApod(selected);
  };

  const getApods = async () => {
    const currentDate = new Date();
    const lastFourDates = getLastFourDates(currentDate);
    const multiApis = getMultiApis(lastFourDates);
    const resultResponses = await multiApiCall(multiApis);
    Promise.allSettled(resultResponses).then((result) => {
      result.map(async ({ status, value }) => {
        if (status === "fulfilled" && value?.status === 200) {
          setApodState((prev) => [
            ...prev,
            { ...value?.data, id: crypto.randomUUID() },
          ]);
        }
      });
    });
  };
  useEffect(() => {
    getApods();
    return () => {
      setApodState([]);
    };
  }, []);

  return (
    <div className={classes["apod-wrapper"]}>
      <Flexbox gap={20}>
        <Card
          className={classes["img-card-wrapper"]}
          onClick={() => onCardClickHandler(apodState[0]?.id)}
        >
          <div className={classes["apod-img-wrapper"]}>
            <CustomImage
              src={apodState[0]?.url ?? ""}
              alt="photo"
              classProp={classes["apod-hero-img"]}
              width={900}
              height={900}
            />
          </div>
          <Card.ImgOverlay>
            <h3 className={classes["apod-hero-img-desc"]}>
              {apodState[0]?.title ?? ""}
            </h3>
            <Card.Text className={classes["apod-hero-img-desc"]}>
              {`copyright - ${apodState[0]?.copyright ?? ""}`}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Flexbox gap={10} classProp={classes["img-gallery-item-wrapper"]}>
          {apodState?.length > 0 &&
            apodState.map((apod, index) => {
              if (index > 0) {
                return (
                  <Card
                    key={apod.id}
                    className={classes["img-gallery-item-card-wrapper"]}
                    onClick={() => onCardClickHandler(apod.id)}
                  >
                    <div className={classes["img-gallery-wrapper"]}>
                      <CustomImage
                        src={apod.url}
                        alt="photo"
                        classProp={classes["gallery-img"]}
                        width={400}
                        height={400}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>{apod.title}</Card.Title>
                      <Card.Text>{apod.date}</Card.Text>
                    </Card.Body>
                  </Card>
                );
              }
            })}

          {(!apodState || apodState.length === 0) && (
            <Flexbox gap={10}>
              <Card className={classes["img-gallery-item-card-wrapper"]}>
                <div
                  className={classes["img-gallery-wrapper"]}
                  style={{ height: "21.5rem" }}
                >
                  <CustomImage
                    classProp={classes["gallery-img"]}
                    width={10}
                    height={10}
                  />
                </div>
              </Card>
              <Card className={classes["img-gallery-item-card-wrapper"]}>
                <div
                  className={classes["img-gallery-wrapper"]}
                  style={{ height: "21.5rem" }}
                >
                  <CustomImage
                    classProp={classes["gallery-img"]}
                    width={10}
                    height={10}
                  />
                </div>
              </Card>
              <Card className={classes["img-gallery-item-card-wrapper"]}>
                <div
                  className={classes["img-gallery-wrapper"]}
                  style={{ height: "21.5rem" }}
                >
                  <CustomImage
                    classProp={classes["gallery-img"]}
                    width={10}
                    height={10}
                  />
                </div>
              </Card>
              <Card className={classes["img-gallery-item-card-wrapper"]}>
                <div
                  className={classes["img-gallery-wrapper"]}
                  style={{ height: "21.5rem" }}
                >
                  <CustomImage
                    classProp={classes["gallery-img"]}
                    width={10}
                    height={10}
                  />
                </div>
              </Card>
            </Flexbox>
          )}
        </Flexbox>
      </Flexbox>

      <CustomModal
        title="The Astronomical Picture Of The Day"
        show={modalShow}
        onHide={() => setModalShow(false)}
        fullscreen
      >
        <FullscreenApod apodState={selectedApod} />
      </CustomModal>
    </div>
  );
};

export default AstronomicalPictureOfTheDay;
