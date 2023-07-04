import { Container, Row, Card } from "react-bootstrap";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../../utils/services/api";
import { errorToast, successToast } from "../../utils/globalToast";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  // form handler state
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [loading, setLoading] = useState(false);

  const payload = {
    Email: email,
    Username: userName,
    Password: password,
    Total_score: 0,
    Biodata: "null",
    City: city,
  };

  const navigate = useNavigate();

  const registerRequest = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await api.post("/players", payload);
      if (response.status === 200) {
        successToast(response.data.message);
        navigate("/auth/login");
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
              <h4 className="card-title">Register</h4>
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
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    required
                    autoFocus
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <div className="d-flex justify-content-between">
                    <label htmlFor="password">Password</label>
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
                  <label htmlFor="">City</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    autoFocus
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <div className="custom-checkbox custom-control d-flex ">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      onClick={() => setPrivacy(!privacy)}
                    />
                    <label
                      htmlFor="remember"
                      className="custom-control-label p-2"
                    >
                      I Agree to the{" "}
                      <Link
                        to="/terms-condition"
                        className="text-blue text-decoration-none"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary  w-100 py-1"
                    onClick={registerRequest}
                  >
                    {loading ? (
                      <div className="d-flex justify-content-center">
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
                        Register
                      </div>
                    )}
                  </button>
                </div>
                <div className="mt-4 text-center">
                  Already have an account?{" "}
                  <Link to={"/auth/login"} className="text-decoration-none">
                    Login now
                  </Link>
                </div>
              </form>
            </Card.Body>
          </div>
        </div>
      </Row>
    </Container>
  );
}
