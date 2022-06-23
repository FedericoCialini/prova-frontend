import React from "react";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../redux/reducers/auth";
import styled from "styled-components";
import {FaMapMarkedAlt} from "react-icons/fa";
const Navbar = () =>{
    const dispatch = useDispatch();
    return <NavStyle>
        <div className={"name-container"}>
            <FaMapMarkedAlt id={"icon-nav"}/>
            <h2> ProvaFrontend</h2>
        </div>
        <button type={"button"}
                onClick={()=>dispatch(logoutUser())}>
            <h3>Logout</h3>
        </button>
    </NavStyle>
}

const NavStyle = styled.nav`
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(68, 68, 68, 1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  z-index: 100;
  .name-container{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      column-gap: 25px;
      #icon-nav{
        
        @media screen and (max-width: 450px){
          font-size: 25px;
        }
        @media screen and (max-width: 700px) and (min-width: 451px){
          font-size: 30px;
        }
        @media screen and (min-width: 701px){
          font-size: 50px;

        }
        color: white;
      }
      h2{
        font-weight: bolder;
        color: snow;
        font-family: "Liberation Sans",sans-serif;
        font-style: oblique;
        @media screen and (max-width: 450px){
          font-size: 20px;
        }
        @media screen and (max-width: 700px) and (min-width: 451px){
          font-size: 25px;
        }
        @media screen and (min-width: 701px) {
          font-size: 30px;
        }
       
        
      }
    }
  
  button{
    cursor: pointer;
    background-color: transparent;
    border: transparent;
    h3{
      color: whitesmoke;
      font-size: 22px;
      &:hover{
        color: rgb(255,30,30);
      }
    }
  }
`

export default Navbar;