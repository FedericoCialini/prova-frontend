import React from "react";
import AuthForm from "../components/auth/AuthForm";
import styled from "styled-components";
import background from "../media/sfondo.png";
const Auth = () => {
    return <AuthStyleWrapper image={background}>
        <AuthForm/>
    </AuthStyleWrapper>
}

const AuthStyleWrapper = styled.div`
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${props=>props.image});
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default Auth;