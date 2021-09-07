import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import "../Signin/SigninScreen.css";
import MainScreen from "../../components/MainScreen";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <MainScreen title="SIGN IN">
      <div className="signinContainer">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New here? <Link to="/signup">Signup Here</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default Signin;
