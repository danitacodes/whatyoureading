import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <Link to="/signin">
        <Button>Signin</Button>
      </Link>
      <Link to="/signup">
        <Button>Signup</Button>
      </Link>
    </div>
  );
}

export default Home;
