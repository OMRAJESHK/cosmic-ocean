"use client";
import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";

import BannerSection from "./banner";
import Accordion from "react-bootstrap/Accordion";
import classes from "./home.module.css";
import { celestials, quotes } from "./constants";
import CustomImage from "@/components/ui/customImage";
import solarSystem1 from "assets/images/home/solar-system-1.jpg";

const Celestial = ({ id, url, title, description }) => {
  return (
    <Card>
      <Card.Body className={classes["celestials-card-body"]}>
        <div className={classes["celestials-item-wrapper"]}>
          <div>
            <img src={url} alt={title} />
          </div>
          <div className={classes["celestials-desc-wrapper"]}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
const Home = () => {
  return (
    <Fragment>
      <BannerSection />
      <div className={classes["container"]}>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Understanding Solar System as Kids
            </Accordion.Header>
            <Accordion.Body className={classes["accordion-body"]}>
              <div className={classes["solar-system-wrapper"]}>
                <article className={classes["article-wrapper"]}>
                  <div className={classes["img-wrapper"]}>
                    <div className={classes["solar-system-img-wrapper"]}>
                      <CustomImage
                        src={solarSystem1}
                        classProp={classes["solar-system-img"]}
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <ul className={classes["solar-system-desc-wrapper"]}>
                    <li>
                      <p>
                        The solar system is like a big family of planets, moons,
                        and the sun that are all connected together in space. It
                        is so big that it would take a very long time to travel
                        from one planet to another, even with a super-fast
                        spaceship.
                      </p>
                    </li>
                    <li>
                      <p>
                        {`Scientists and astronauts study the solar system to
                        learn more about the planets, moons, and everything in
                        space.The solar system is an amazing place, and there's
                        still so much to discover and explore!`}
                      </p>
                    </li>
                    <li>
                      <p>
                        {`The solar system is like a big family of objects in
                        space that all go around the Sun. Imagine the Sun as the
                        boss of the family because it's the biggest and
                        brightest thing in our solar system. Everything else,
                        like planets, moons, asteroids, and comets, is a part of
                        this family, and they all move around the Sun because of
                        the Sun's strong gravity, which pulls them in.`}
                      </p>
                    </li>
                  </ul>
                </article>
                <article className={classes["article-wrapper"]}>
                  <div className={classes["img-wrapper"]}>
                    <img
                      src="https://c4.wallpaperflare.com/wallpaper/792/489/146/the-sun-saturn-the-moon-space-wallpaper-preview.jpg"
                      className={classes["solar-system-img"]}
                    />
                  </div>
                  <ul className={classes["solar-system-desc-wrapper"]}>
                    <li>
                      {`The Sun is a giant ball of hot, glowing gas, and it
                        gives us light and heat. The Earth is one of the planets
                        in the solar system, and it's where we live. There are
                        eight planets in total, and they all have their own
                        special features. Some are big, like Jupiter, while
                        others are smaller, like Mercury. Planets have their own
                        moons that orbit around them, just like Earth has the
                        Moon.`}
                    </li>
                    <li>
                      {`In our solar system, there are also smaller objects
                        called asteroids and comets. They're like space rocks
                        and icy snowballs. They move around, and sometimes they
                        come close to the planets or the Sun. We can learn a lot
                        about our solar system by studying these objects and the
                        different planets. So, the solar system is like a big
                        cosmic family with the Sun as the leader and lots of
                        interesting things going on in space!`}
                    </li>
                    <li>
                      {`The planets have moons too. Earth has one moon, but
                        other planets have many moons. Moons are like little
                        friends that go around the planets.There are also
                        smaller objects in the solar system called asteroids and
                        comets. They're like space rocks and ice balls.`}
                    </li>
                  </ul>
                </article>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Understanding Solar System as Teenager
            </Accordion.Header>
            <Accordion.Body className={classes["accordion-body"]}>
              <div className={classes["solar-system-wrapper"]}>
                <article className={classes["article-wrapper"]}>
                  <div className={classes["img-wrapper"]}>
                    <div className={classes["solar-system-img-wrapper"]}>
                      <CustomImage
                        src={solarSystem1}
                        classProp={classes["solar-system-img"]}
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <ul className={classes["solar-system-desc-wrapper"]}>
                    <li>
                      {`The Sun is a giant ball of hot, glowing gas, and it
                        gives us light and heat. The Earth is one of the planets
                        in the solar system, and it's where we live. There are
                        eight planets in total, and they all have their own
                        special features. Some are big, like Jupiter, while
                        others are smaller, like Mercury. Planets have their own
                        moons that orbit around them, just like Earth has the
                        Moon.`}
                    </li>
                    <li>
                      {`In our solar system, there are also smaller objects
                        called asteroids and comets. They're like space rocks
                        and icy snowballs. They move around, and sometimes they
                        come close to the planets or the Sun. We can learn a lot
                        about our solar system by studying these objects and the
                        different planets. So, the solar system is like a big
                        cosmic family with the Sun as the leader and lots of
                        interesting things going on in space!`}
                    </li>
                    <li>
                      {`The planets have moons too. Earth has one moon, but
                        other planets have many moons. Moons are like little
                        friends that go around the planets.There are also
                        smaller objects in the solar system called asteroids and
                        comets. They're like space rocks and ice balls.`}
                    </li>
                  </ul>
                </article>
                <article className={classes["article-wrapper"]}>
                  <div className={classes["img-wrapper"]}>
                    <img
                      src="https://c4.wallpaperflare.com/wallpaper/630/43/768/space-earth-sun-solar-system-wallpaper-preview.jpg"
                      className={classes["solar-system-img"]}
                    />
                  </div>
                  <ul className={classes["solar-system-desc-wrapper"]}>
                    <li>
                      <p>
                        The solar system is like a big family of planets, moons,
                        and the sun that are all connected together in space. It
                        is so big that it would take a very long time to travel
                        from one planet to another, even with a super-fast
                        spaceship.
                      </p>
                    </li>
                    <li>
                      {`Scientists and astronauts study the solar system to
                        learn more about the planets, moons, and everything in
                        space.The solar system is an amazing place, and there's
                        still so much to discover and explore!`}
                    </li>
                    <li>
                      {`The solar system is like a big family of objects in
                        space that all go around the Sun. Imagine the Sun as the
                        boss of the family because it's the biggest and
                        brightest thing in our solar system. Everything else,
                        like planets, moons, asteroids, and comets, is a part of
                        this family, and they all move around the Sun because of
                        the Sun's strong gravity, which pulls them in.`}
                    </li>
                  </ul>
                </article>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className={classes["container"]}>
        <blockquote className={classes["otro-blockquote"]}>
          {quotes[0].quote}
          <span>{quotes[0].by}</span>
        </blockquote>
      </div>
      <div className={classes["container"]}>
        <Card>
          <Card.Header>The Celestials</Card.Header>
          <Card.Body>
            <div className={classes["celestials-wrapper"]}>
              {celestials.map((celestial) => (
                <Celestial key={celestial.id} {...celestial} />
              ))}
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className={classes["container"]}>
        <blockquote className={classes["otro-blockquote"]}>
          {quotes[1].quote}
          <span>{quotes[1].by}</span>
        </blockquote>
      </div>
    </Fragment>
  );
};

export default Home;
