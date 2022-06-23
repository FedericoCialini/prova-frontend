import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {logUser} from "../../redux/reducers/auth";
import {Navigate} from "react-router-dom"
import styled from "styled-components";
import {FaUserCircle} from "react-icons/fa";
const AuthForm = () =>{
    const dispatch = useDispatch();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isError,setError] = useState(false)
    const handleSubmit = async (e) =>{
        e.preventDefault(true);
        setError(false);
        try{
            const data = await fetch("https://hr.translated.com/auth",{
                method:"Post",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const response = await data.json();
            console.log(response);
            dispatch(logUser());
            return <Navigate redirect to={"/"}/>
        }catch (e){
            setError(true);
        }
    }

    return <FormWithStyle errorVisibility={isError ? "visible" : "hidden"}
                          onSubmit={handleSubmit}>
        <header>
            <FaUserCircle className={"login-icon"}/>
            <h2> User Login </h2>
        </header>
        <div className={"input-container"}>
            <input  placeholder={"Insert email"}
                    spellCheck={false}
                    required={true}
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    type={"email"}/>

            <input  placeholder={"Insert password"}
                    required={true}
                    type={"password"}
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
            <span> Check your email or password </span>
        </div>
        <footer className={"button-container"}>
            <button type={"submit"}>
                LOG IN
            </button>
        </footer>

    </FormWithStyle>
}

const FormWithStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: rgba(68, 68, 68, 1);
  width: 350px;
  height: 500px;
  border-radius: 10px;
  header{
    position: relative;
    top: 0;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login-icon{
      font-size: 90px;
      color: white;
    }
    h2{
      color: ghostwhite;
      font-size: 30px;
      font-weight: bolder;
      font-family: "DejaVu Sans Condensed",sans-serif;
      font-style: oblique;
    }
  }
  .input-container{
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    row-gap: 50px;
    justify-content: center;
    align-items: center;
    
    input{
      width: 200px;
      height: 30px;
      padding: 3px;
      background:none;
      border: none;
      border-bottom: 1px solid #e1e1e1;
      text-align: center;
      font-size: 18px;
      color: white;
      &::selection{
        background-color:#e1e1e1;
        color: black;
      }
      &:focus{
        transition: 200ms;
        outline: none;
        border-bottom: 1px solid orangered;
      }
    }
    span{
      visibility: ${props=>props.errorVisibility};
      color: orangered;
      font-weight: lighter;
      font-style: oblique;
    }
  }
  .button-container{
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
 
    button{
      cursor: pointer;
      width: 250px;
      height: 50px;
      border-radius: 5px;
      border: 1px solid black;
      background-color: #1ab290;
      color: white;
      font-size: 25px;
      font-family: "DejaVu Sans Condensed",sans-serif;
      &:hover{
        background-color: #0a9280;
        color: #e1e1e1;
      }
     
    }
  }
`

export default AuthForm