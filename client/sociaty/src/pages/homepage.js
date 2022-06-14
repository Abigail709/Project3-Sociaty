import React from "react";
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap';
import styled , {css}from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


function Home() {

  
  return (
    <>
      <div className="mb-2" >
        <div className="red">
          <h1 className="red">Fun. Interactive. Reliable Social App</h1>
          <br></br>
          <h2>Connect with friend and family!!</h2>
        </div>
        <LinkContainer to="/chat">
        <Button variant="primary" size="lg" className="chatbtn">
          Lets chat
        </Button>
        </LinkContainer>
        

        
      </div>
      
    </>
  );

  

   
}
  
  export default Home;