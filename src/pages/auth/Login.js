import { Container, Row, Card, Nav } from "react-bootstrap";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { errorToast, successToast } from "../../utils/globalToast";
import { ToastContainer } from "react-toastify";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {};
  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios({
        method: "POST",
        baseURL:
          "https://binarwave30team1-be-production-deb9.up.railway.app/auth/login",
        data: {
          Username: userName,
          Password: password,
        },
      });
      if (response) {
        console.log(response.data.msg);
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
                    <label for="remember" className="custom-control-label p-2">
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
