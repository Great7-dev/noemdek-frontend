import React from "react";
import { useRecoilState } from "recoil";
import { ModalStyle } from "./regModalStyle";
import Logo from "../../../assets/Successfully Done.svg";
import { successModalState } from "../../../atoms/succesModal";
import { ImCancelCircle } from "react-icons/im";

const initialValue = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmpassword: "",
};

export const RegModal = () => {
  const [modal, setModal] = useRecoilState(successModalState);
  return (
    <ModalStyle>
      <div className="mymodal">
        <div className="cancel">
          <ImCancelCircle
            className="cancelIcon"
            onClick={() => setModal(false)}
          />
        </div>
        <img src={Logo} alt="Success" className="correct" />
        <h1 className="text">Check your email for verification link</h1>
      </div>
    </ModalStyle>
  );
};
