import { Container, Row, Card, Nav } from "react-bootstrap";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { ThreeDots } from "react-loader-spinner";
import { errorToast, successToast } from "../../utils/globalToast";
import api from "../../utils/services/api";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    const payload = {
      Username: userName,
      Password: password,
    };
    try {
      setLoading(true);
      const response = await api.post("/auth/login", payload);
      if (response.data.auth === false) {
        errorToast(response.data.message);
      } else {
        navigate("/users/dashboard");

        console.log(response.data.token);
      }
    } catch (error) {
      errorToast(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  };
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
                    autoFocus
                    onChange={(e) => setUserName(e.target.value)}
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
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="btn  btn-sm m-0 p-0 px-1 position-absolute show-password"
                    >
                      {showPassword ? (
                        <BsEye className="text-blue" />
                      ) : (
                        <BsEyeSlash className="text-blue" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-checkbox custom-control d-flex ">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      onChange={() => console.log("oke")}
                    />
                    <label
                      htmlFor="remember"
                      className="custom-control-label p-2"
                    >
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary  w-100 py-1"
                    onClick={loginHandler}
                  >
                    {loading ? (
                      <div className=" d-flex justify-content-center">
                        <ThreeDots
                          height="30"
                          width="30"
                          radius="1"
                          color="#ffaa"
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{}}
                          wrapperClassName="p-0 m-0"
                          visible={true}
                        />
                      </div>
                    ) : (
                      <div
                        style={{
                          height: 30,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Login
                      </div>
                    )}
                  </button>
                </div>
                <div className="mt-4 text-center">
                  Don't have an account ?
                  <Link to={"/auth/register"}>Register now</Link>
                </div>
              </form>
            </Card.Body>
          </div>
        </div>
      </Row>
    </Container>
  );
}
