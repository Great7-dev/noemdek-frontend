import React, { useState } from "react";
import { RegisterStyle, StyledButton, StyledForm } from "./registerStyle";
import { InputField } from "../../utils/input/input";
import { registerHandler } from "../../api/axio";
import { successModalState } from "../../atoms/succesModal";
import { useRecoilState } from "recoil";
import { RegModal } from "../modal/Regmodal/regModal";

export const Register = ({ ...props }) => {
  const [modal, setModal] = useRecoilState(successModalState);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

    if (
      user.firstname !== "" &&
      user.lastname !== "" &&
      user.email !== "" &&
      (user.password !== "") & (user.confirmpassword !== "")
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerHandler({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      confirmpassword: user.confirmpassword,
    });
    console.log("RESPONSE", res);
    if (res.status === 200) {
      setModal(true);
    }
  };

  return (
    <RegisterStyle>
      <div className="reg">
        <StyledForm onSubmit={handleSubmit}>
          <div>
            <h1 className="header">Please enter your registration details</h1>
          </div>
          <div className="line"></div>
          <div className="formdiv">
            <label className="label">
              First Name<span>*</span>
            </label>
            <InputField
              name="firstname"
              type="text"
              className="input"
              value={user?.firstname}
              change={handleChange}
              pattern="^[A-Za-z0-9]{3,16}$"
              placeholder="Enter your first name"
            />
          </div>
          <div className="">
            <label className="label">
              Last Name<span>*</span>
            </label>
            <InputField
              name="lastname"
              type="text"
              className="input"
              value={user?.lastname}
              change={handleChange}
              pattern="^[A-Za-z0-9]{3,16}$"
              placeholder="Enter your last name"
            />
          </div>
          <div className="">
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
            <label className="label">
              Re-enter Password<span>*</span>
            </label>
            <InputField
              name="confirmpassword"
              type="password"
              className="input"
              value={user?.confirmpassword}
              change={handleChange}
              placeholder="Confirm password"
            />
          </div>
          <div className="">
            <StyledButton
              className={isButtonDisabled ? "disabled-button" : "active-button"}
              type="submit"
              disabled={isButtonDisabled}
            >
              Register
            </StyledButton>
          </div>
          {modal && <RegModal />}
        </StyledForm>
      </div>
    </RegisterStyle>
  );
};
