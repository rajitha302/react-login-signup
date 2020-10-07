import React from "react";
import "./welcome.scss";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";

function welcome() {
  return (
    <div className="welcome">
      <Container className="text-center">
        <h3>Welcome</h3>
        <Button className="px-3 welcome__btn">
          <Link to="/">Logout</Link>
        </Button>
      </Container>
    </div>
  );
}

export default welcome;
