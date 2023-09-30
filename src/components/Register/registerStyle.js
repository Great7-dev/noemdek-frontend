import styled from "styled-components";

export const RegisterStyle = styled.div`
  width: 100%;
  padding: 5% 20%;
  display: flex;
  justify-content: center;
  background-color: #d1eaf0;
  .reg {
    width: 40rem;
    height: 796px;
    background-color: #fff;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
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

  .label {
    font-size: 16px;
    font-weight: 600;
    padding: 0 0 0 10%;
    margin-bottom: 0%;
  }
  .formdiv {
    margin-top: 10%;
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
  span {
    color: red;
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

export const StyledButton = styled.button`
  border: none;
  background-color: #005a92;
  /* background-image: linear-gradient(to right, #de3d6d 40%, #f5844c); */
  color: #f5f5f5;
  width: 80%;
  height: 48px;
  margin: 4% 10%;
  box-sizing: border-box;
  font-weight: 600;
  line-height: 14.52px;
`;

export const StyleInput = styled.input`
  background: #ffffff;
  border: solid #d9d9d9;
  border-width: 1px;
  padding: 8px 16px 8px 16px;
  margin: 0% 0 5% 10%;
  outline: none;
  width: 80%;
  height: 48px;
  border-radius: 1px;
  /* border:5px solid green; */
`;
