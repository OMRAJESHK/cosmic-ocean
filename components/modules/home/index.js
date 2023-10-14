"use client";
import React, { Fragment } from "react";
import BannerSection from "./banner";
import Accordion from "react-bootstrap/Accordion";
import classes from "./home.module.css";

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
            <Accordion.Body>
              <div className={classes["solar-system-wrapper"]}>
                <article className={classes["article-wrapper"]}>
                  <ul>
                    <li>
                      The solar system is like a big family of planets, moons,
                      and the sun that are all connected together in space. It
                      is so big that it would take a very long time to travel
                      from one planet to another, even with a super-fast
                      spaceship.
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
                  <div>
                    <img
                      src="https://c4.wallpaperflare.com/wallpaper/630/43/768/space-earth-sun-solar-system-wallpaper-preview.jpg"
                      style={{ width: "100%" }}
                    />
                  </div>
                </article>
                <article className={classes["article-wrapper"]}>
                  <div>
                    <ul>
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
                  </div>
                  <div>
                    <img
                      src="https://c4.wallpaperflare.com/wallpaper/792/489/146/the-sun-saturn-the-moon-space-wallpaper-preview.jpg"
                      style={{ width: "100%" }}
                    />
                  </div>
                </article>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Understanding Solar System as Teenager
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Understanding Solar System as Adult
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Fragment>
  );
};

export default Home;
