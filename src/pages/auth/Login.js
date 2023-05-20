import { Button, Container, Row, Card, Nav } from "react-bootstrap";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container className="" style={{ height: "100vh" }}>
      <Row className="justify-content-center align-items-center h-100">
        <div className="card-wrapper ">
          <div className="card fat">
            <Card.Body>
              <h4 className="card-title">Login</h4>
              <form className="p-0 m-0 w-100 ">
                <div className="form-group">
                  <label htmlFor="">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    autofocus
                  />
                </div>
                <div className="form-group">
                  <div className="d-flex justify-content-between">
                    <label htmlFor="password">password</label>
                    <Nav className="w-100">
                      <Link
                        href="/forgot"
                        className=" text-end text-blue text-decoration-none"
                      >
                        Forgot Password ?
                      </Link>
                    </Nav>
                  </div>
                  <div className="position-relative  d-flex align-items-center">
                    <input
                      type={showPassword ? "password" : "text"}
                      className="form-control"
                      required
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="btn  btn-sm m-0 p-0 px-1 position-absolute show-password"
                    >
                      {showPassword ? (
                        <BsEyeSlash className="text-blue" />
                      ) : (
                        <BsEye className="text-blue" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-checkbox custom-control d-flex ">
                    <input type="checkbox" className="custom-control-input" />
                    <label for="remember" className="custom-control-label p-2">
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block w-100"
                  >
                    Login
                  </button>
                </div>
                <div className="mt-4 text-center">
                  Don't have an account ?
                  <Link to={"auth/register"}>Register now</Link>
                </div>
              </form>
            </Card.Body>
          </div>
        </div>
      </Row>
    </Container>
  );
}
