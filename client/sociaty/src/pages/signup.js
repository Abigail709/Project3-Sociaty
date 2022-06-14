import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import {useNavigate, Link} from 'react-router-dom';
import axios from "axios";
import {signupRoute} from "../utils/apiRoutes"

function Signup() {
    
    const navigate = useNavigate();

    const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    });


    const [submitted, setSubmitted] = useState(false);


    

    const handleSignup = async (event) => {
      event.preventDefault();
      if (handleValidate()) {
        
        console.log("in validate", signupRoute)
        const { email, username, password, confirmPassword } = values;
        const { data } = await axios.post(signupRoute, {
          username,
          email,
          password,
        });


        if (data.status === false) {
          alert("data.msg")
        }
        if (data.status === true) {
          localStorage.setItem(
            "Chat-App-user", JSON.stringify(data.user)
          );
           navigate("/");
        }
        
      }

        
    }
    

    const handleChange = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };
               
    const handleValidate =() => {
      const {username, email, password, confirmPassword} = values;
      if (password !== confirmPassword) {
        
        
       alert('Enter matching password')
       
      } 
      return true;
    };


    



    return (
                <Container>
                <Form action="" onSubmit={(event) => handleSignup(event)}>
                <Form.Group className="mb-3" controlId="fuserName" >
                  <Form.Label>UseName</Form.Label>
                  <Form.Control type="name" placeholder="Enter Username" name="username" onChange={(e) => handleChange(e)} />
                  
                </Form.Group>
        
        
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address or Phone Number</Form.Label>
                  <Form.Control type="email" placeholder="Enter email / Phone Number" name="email" onChange={(e) => handleChange(e)} />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
          
                <Form.Group className="mb-3" controlId="formBasicPassword1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => handleChange(e)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Confrim Password" name="confirmPassword" onChange={(e) => handleChange(e)} />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                <Link to="/login">Sigin</Link>
              
                  
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
