import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import {Container, Col, Row} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Message from '../components/message';

function Chat() {
    return (
      <Container>
         <Row>
          <Col>
            <Sidebar />
          </Col>

          <Col>
            <Message />
          </Col>
          </Row>
          
      </Container>
    );
  }
  
  export default Chat;