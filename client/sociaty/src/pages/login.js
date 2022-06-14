import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import {useNavigate, Link} from 'react-router-dom';
import axios from "axios";
import {loginRoute} from "../utils/apiRoutes"

function Login() {
    
    const navigate = useNavigate();

    const [values, setValues] = useState({
    username: "",
    password: "",
    });

    const [submitted, setSubmitted] = useState(false);


    

    useEffect(()=> {
      if(localStorage.getItem("Chat-App-user")){
        navigate("/")
      }
      
    })




    const handleSubmit = async (event) => {
      event.preventDefault();
      if (handleValidate()) {
        
        
        const { email, username, password, confirmPassword } = values;
        const { data } = await axios.post(loginRoute, {
          username,
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
      if (password === "") {
        
        
       alert('Enter password')
       
      } 
      return true;
    };


    



    return (
                <Container>
                <Form action="" onSubmit={(event) => handleSubmit(event)}>
                <Form.Group className="mb-3" controlId="fuserName" >
                  <Form.Label>UserName</Form.Label>
                  <Form.Control type="name" placeholder="Enter Username" name="username" onChange={(e) => handleChange(e)} />
                  
                </Form.Group>
        
        
                <Form.Group className="mb-3" controlId="formBasicPassword1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => handleChange(e)} />
                </Form.Group>

              
                <Button variant="primary" type="submit">
                Login
              
                  
                </Button>
              </Form>
              <div className='signuplink'>
                  <p>
                      Don't have an account? <Link to="/signup">Signup</Link>
                    </p>
              </div>
              </Container>
              
            
              
            );
    
}

export default Login;


