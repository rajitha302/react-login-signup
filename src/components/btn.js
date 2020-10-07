import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./btn.scss";
import { Button } from "react-bootstrap";

function btn(props) {
  return (
    <div>
      <Button type="submit" value="submit" className="custom-btn p-2">
        {props.name}
      </Button>
    </div>
  );
}

export default btn;
