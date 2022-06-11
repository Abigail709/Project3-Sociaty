import React from "react";
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap';

function Home() {
  return (
    <>
      <div className="mb-2">
        <div>
          <h1>Connect with friends and family</h1>
          <h2>Reliable social App</h2>
        </div>
        <LinkContainer to="/chat">
        <Button variant="primary" size="lg">
          Lets chat
        </Button>
        </LinkContainer>
        

        
      </div>
      
    </>
  );


      
  
   
}
  
  export default Home;