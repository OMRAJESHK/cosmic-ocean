"use client";
import React from "react";
import Button from "react-bootstrap/Button";
import classes from "./navbar.module.css";
import RenderNavbar from "./renderNavbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Image from "next/image";

const CosmicNavbar = () => {
  return (
    <header>
      <Navbar
        expand="lg"
        className={`${classes["nav-container"]} bg-body-tertiary bg-primary navbar-light navbar`}
      >
        <Container fluid>
          <Navbar.Brand
            href="/"
            className={`${classes["nav-brand-title"]} me-4`}
          >
            <Image
              src="/home/space-logo.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
            Cosmic Backyard
          </Navbar.Brand>
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
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default CosmicNavbar;
