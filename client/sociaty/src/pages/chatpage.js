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

const socket = io.connect('http://localhost:5000')

function Chat() {
  const navigate = useNavigate();

  const [friends, setFriends] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      
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
         <div className='chatcontainer'> 
           {/* <Friends friends={friends} currentUser={currentUser} />
            */}

            <h2>Message</h2>
            <input type="text" placeholder='Hen' onChange={(event) => {setUsername(event.target.value);}}/>
            <input type="text" placeholder='Room ID' onChange={(event) => {setRoom(event.target.value);}}/>
            <button>Join A Room</button>

         </div>
      </Container>
    );
  }


  

//  const Container = styled.div`
// height: 1200px;
// width: 100%;
// background-color:pink;
// display: flex;
// flex-direction: column;
// justify-content: center;
// .chatcontainer {
//   height:900px;
//   width: 80%;
//   background-color:white;
//   display:grid
//   grid-template-columns: 25% 75%;
//   @media screen and (min-width: 720px) and (max-width: 1080px) {
//     grid-template-columns: 35% 65%;
// }
// }
// `;


  export default Chat;