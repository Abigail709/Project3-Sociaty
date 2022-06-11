import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';


async function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    const [submitted, setSubmitted] = useState(false);


    const handleName = (e) => {
       

        setName(e.target.value);
        
    };

    //Handling the email change
    const handleEmail = (e) => {
        

        setEmail(e.target.value);
        
    };

    // Handling the password change
    const handlePassword = (e) => {
        

        setPassword(e.target.value);
       
    };

    const handleSignup = (e) => {
        e.preventDefault();

            

    }
              
               


    return (
                <Container>
                <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter name" onChange={handleName} />
                  
                </Form.Group>
        
        
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address or Phone Number</Form.Label>
                  <Form.Control type="email" placeholder="Enter email / Phone Number" onChange={handleEmail} />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
          
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={handlePassword}/>
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                  Signup
                </Button>
              </Form>
              <div className='signuplink'>
                  <p>
                      Have an account? <Link to="/login">Login</Link>
                    </p>
              </div>
              </Container>
        
            );
    
}

export default Signup;
