import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .mymodal {
    width: 510px;
    height: 410px;
    background-color: #ffffff;
    box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.75);
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  .text {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
  }
  .correct {
    display: flex;
    justify-content: center;
    width: 96px;
    margin: 26px auto;
  }
  .cancel {
    display: flex;
    width: 85%;
    height: 48px;
    margin: 4% 7%;
    flex-direction: row-reverse;
    cursor: pointer;
  }
  .cancelIcon {
    font-size: 30px;
    color: #012454;
  }
`;
