import React, { useState } from "react";
import { LoginStyle, StyledForm } from "./loginStyle";
import { InputField } from "../../utils/input/input";
import { StyledButton } from "../Register/registerStyle";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/axio";

export const Login = ({ ...props }) => {
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

    if (user.email !== "" && user.password !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const loginUser = async (email, password) => {
    try {
      const res = await login(email, password);
      console.log("Response from server:", res);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error here, e.g., show an error message.
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = user.email;
    const password = user.password;
    loginUser(email, password);
  };

  const handleClick = (e) => {
    navigate("/");
  };

  return (
    <LoginStyle>
      <StyledForm onSubmit={handleSubmit}>
        <div className="login">
          <div>
            <h1 className="header">Welcome please login below</h1>
          </div>
          <div className="line"></div>
          <div className="formdiv">
            <label className="label">
              E-mail<span>*</span>
            </label>
            <InputField
              name="email"
              type="email"
              className="input"
              value={user?.email}
              change={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="">
            <label className="label">
              Password<span>*</span>
            </label>
            <InputField
              name="password"
              type="password"
              className="input"
              value={user?.password}
              change={handleChange}
              pattern="(^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
              placeholder="Enter your password"
            />
          </div>
          <div className="">
            <StyledButton
              className={isButtonDisabled ? "disabled-button" : "active-button"}
              type="submit"
              disabled={isButtonDisabled}
            >
              Login
            </StyledButton>
          </div>
          <div onClick={handleClick}>
            <h1 className="pass">Forgot your password?</h1>
          </div>
        </div>
      </StyledForm>
    </LoginStyle>
  );
};
