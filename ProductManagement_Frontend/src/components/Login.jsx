import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    try{

        const response = await axios.post(
          "http://localhost:8081/users/login",
          formData
        );
        if ((response.status = 200)) {
          history("/");
        } else {
          alert("Invalid credentials");
        }
        localStorage.setItem("username", formData.username);
        localStorage.setItem("token", response.data.token);
        console.log(response);
    }catch (error) {
      console.error("Error dunring login:", error);
    }
  };

  return (
    <div className="main pt-5">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-md-6 text-center d-flex align-items-center pb-5">
            <div className="">
              <div className="">
                <h3 className="">
                  Streamline Your Workflow – Manage Products with Ease.
                </h3>
                <p className="card-text">
                  A powerful platform for businesses to efficiently track,
                  update, and optimize product management all in one place.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Login</h3>
                <form onSubmit={handleSubmit}>
                  {/* Username */}
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <p>
                    Haven't registered yet <a href="/register">Register</a>
                  </p>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
