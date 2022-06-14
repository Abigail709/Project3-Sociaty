import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
// import {Container, Col, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import Message from '../components/message';
import axios from "axios"
import {useNavigate} from "react-router-dom"
import styled from "styled-components"
import Friends from '../components/Friends';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import {Container} from '../components/styles/chat.styled'
import io from 'socket.io-client'
import Chatting from '../components/chatting';

const socket = io.connect('http://localhost:5000')

function Chat() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [friends, setFriends] = useState([]);
  const [room, setRoom] = useState('');
  const [currentUser, setCurrentUser] = useState(undefined);
  const [showChat, setShowChat] = useState(false);
  



  const joinRoom = () => {

    if (username !== '' && room !== '') {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  }

  // useEffect(async () => {
  //   if (!localStorage.getItem("Chat-App-user")) {
  //     navigate("/login");
  //   } else {
  //     setCurrentUser(
  //       await JSON.parse(
  //         localStorage.getItem("Chat-App-user")
  //       )
  //     );
  //   }
  // }, []);
  
  

  
  return (
    
      <Container >
      
         <div className='joinchat'> 
         {!showChat ? (
           <div className='joinChat'>

            <h2> Message </h2>
            <input type="text" placeholder='James' onChange={(event) => {setUsername(event.target.value);}}/>
            <input type="text" placeholder='Room ID' onChange={(event) => {setRoom(event.target.value);}}/>
            <button onClick={joinRoom}>Join Room</button>
            </div>
          )
          :
          (
            
            <Chatting socket={socket} username={username} room={room}/>
          )}

         </div>
      </Container>
      
    );
  }


  




  export default Chat;