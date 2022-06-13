import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
// import {Container, Col, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import Message from '../components/message';
import axios from "axios"
import {useNavigate} from "react-router-dom"
import styled from "styled-components"


function Chat() {
  
  const [message, setmessage] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(async () => {
    if (!localStorage.getItem("Chat-App-user")) {
      navigate("/login");
    } else {
      setCurrentUser(
        await JSON.parse(
          localStorage.getItem("Chat-App-user")
        )
      );
    }
  }, []);
  useEffect(() => {
    if (currentUser) {
      
    }
  }, [currentUser]);

  useEffect(async () => {
    if (currentUser) {
      if 
    }
  }, [currentUser]);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  

    return (
      <Container>
         <div className='chatcontainer'></div>
      </Container>
    );
  }


const Container = styled.div`
height: 1200px;
width: 100%;
background-color:pink;
display: flex;
flex-direction: column;
justify-content: center;
.chatcontainer {
  height:900px;
  width: 80%;
  background-color:white;
  display:grid
  grid-template-columns: 25% 75%;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: 35% 65%;

}
`;


  export default Chat;