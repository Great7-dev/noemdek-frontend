import styled from "styled-components";

export const LoginStyle = styled.div`
  width: 100%;
  padding: 5% 20%;
  display: flex;
  justify-content: center;
  background-color: #d1eaf0;
  .login {
    width: 40rem;
    height: 690px;
    background-color: #fff;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    padding-top: 8%;
  }
  .line {
    border-bottom: 3px #d1eaf0 solid;
    margin-top: 8%;
  }
  .label {
    font-size: 16px;
    font-weight: 600;
    padding: 0 0 0 10%;
    margin-bottom: 0%;
  }
  .formdiv {
    margin-top: 10%;
  }
  span {
    color: red;
  }
  .active-button {
    background-color: #005a92;
    color: #fff;
    cursor: pointer;
  }

  .disabled-button {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
  .pass {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #0066b2;
    cursor: pointer;
  }
`;

export const StyledForm = styled.form`
  & .input-label {
    color: #ffffff;
    text-align: left;
    font-size: 12px;
    position: relative;
    width: 100%;
    /* border: 5px solid green; */
  }
`;
