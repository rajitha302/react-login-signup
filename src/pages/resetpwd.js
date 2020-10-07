import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./resetpwd.scss";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import Btn from "../components/btn";
import { Link } from "react-router-dom";
import Logo from "../components/heading";

function resetpwd() {
  return (
    <div className="resetpwd pt-5">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="col-md-6 card p-5">
            <Logo />
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Btn name="Send a reset link" />
            </Form>
            <Col className="text-center pt-4">
              <p>
                Check our FAQ page,
                <span>
                  <Button variant="link" className="resetpwd__btn">
                    <Link to="/">Here </Link>
                  </Button>
                </span>
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default resetpwd;
