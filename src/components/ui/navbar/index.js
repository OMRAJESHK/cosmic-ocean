"use client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import classes from "./navbar.module.css";
import RenderNavbar from "./renderNavbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRouter } from "next/navigation";
import { pageRoutes } from "@/routes/routes";
import CustomImage from "../customImage";
import Link from "next/link";

const CosmicNavbar = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const onSearchHandler = () => {
    router.push(`${pageRoutes.spacesearch}?query=${query}`);
  };

  const onQueryChangeHandler = (e) => {
    const { value } = e.target;
    setQuery(value);
  };
  return (
    <header>
      <Navbar
        expand="lg"
        className={`${classes["nav-container"]} bg-body-tertiary bg-primary navbar-light navbar`}
      >
        <Container fluid>
          <Link href="/" className={classes["brand-wrapper"]}>
            <div className={classes["apod-img-wrapper"]}>
              <div className={classes["brand-img-wrapper"]}>
                <CustomImage
                  src="/home/cosmic-ocean-logo.png"
                  alt="brand Logo"
                  classProp={classes["brand-img"]}
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <span>Cosmic Ocean</span>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" bg="primary">
            <Nav className={`${classes.navlist} ml-2`}>
              <RenderNavbar />
            </Nav>
            <Nav
              className="me-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            />
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="search..."
                className="me-2"
                aria-label="Search"
                onChange={onQueryChangeHandler}
              />
              <Button
                variant="warning"
                onClick={onSearchHandler}
                style={{
                  backgroundColor: "var(--orange)",
                  color: "var(--white)",
                }}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default CosmicNavbar;
