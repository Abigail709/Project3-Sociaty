import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function message() {

    function handleSubmit(e) {
        e.preventDefault();
    }
  return (
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="">
        
        <Form.Control type="text" placeholder="Start messaging
        " />
        
      </Form.Group>

      
      
      <Button variant="primary" type="submit">
        Send
      </Button>
            </Form>
        </div>
    )
}

export default message