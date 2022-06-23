import React from "react";
import styled from "styled-components";
import {AiOutlineClose} from "react-icons/ai";
import {BiError} from "react-icons/bi";

const ErrorModal = (props) =>{
    return <ErrorModalWrapper>
        <header>
            <h3>
                {props.text}
            </h3>
            <button onClick={()=>props.closeModal(false)} >
                <AiOutlineClose className={"icon-close"}/>
            </button>
        </header>
        <div className={"content-container"}>
            <BiError className={"icon-error"}/>
            <h3>
                {props.message}
            </h3>
        </div>
    </ErrorModalWrapper>
}

const ErrorModalWrapper = styled.div`
  position: fixed;
  overflow: hidden;
  border-radius: 25px;
  margin-top: 25%;
  @media screen and (max-width: 790px){
    width: 350px;
  }
  @media screen and (min-width: 791px){
    width: 400px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f2f2f2;
  animation-name: popup;
  animation-duration: 200ms;
  animation-play-state: running;
  z-index: 999;
  @keyframes popup{
    0% {transform: scale(0%)}
    100% {transform: scale(100%)}
  }
  .content-container{
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    .icon-error{
      font-size: 100px;
      color: red;
    }
    h3{
      color: black;
      font-size: 18px;
      font-family: "DejaVu Sans",sans-serif;
      font-style: oblique;
      text-align: center;
      max-width: 20ch;
    }
  }
  header{
    display: grid;
    grid-template-columns: 12fr 1fr;
    height: 100px;
    width: 100%;
    background-color: #545454;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    align-items: center;
    h3{
      color: white;
      font-family: "DejaVu Sans",sans-serif;
      font-weight: bolder;
      font-style: italic;
      font-size: 25px;
      justify-self: center;
      margin-left: 10px;
    }
    button{
      border: transparent;
      background: transparent;
      .icon-close{
        cursor: pointer;
        font-size: 20px;
        color: white;
        margin-right: 5px;
        &:hover{
          color: red;
        }
      }
    }

  }
`

export default ErrorModal;
