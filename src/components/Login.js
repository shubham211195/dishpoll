import React, { useEffect, useState } from 'react';
import {Button,Card, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import users from '../data/user.json';

function Login() {
   const[userName,setUsername]=useState("");
   const[password,setPassword]=useState("");
   const[match,setMatch]=useState(false)
   const[user,setUser]=useState([]);
   useEffect(()=>{
        setUser(users);
   },[])
   const validateDetail=()=>{ 
        {user.map((curUser)=>{
                   return(
                    (curUser.username===userName && curUser.password===password)?
                    setMatch(match=>!match):""
                   ) 
            })
        }
   } 
   const handleForm=(e)=>{
        e.preventDefault();
    }
  return ( 
    <>
    <Form onSubmit={handleForm}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter username" name='username' value={userName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Password"  name='password' value={password}/>
      </Form.Group>
      <Button onClick={validateDetail}>check</Button>
      <Card.Text>
        {match?"Matched😃":"Not matched😭"}
      </Card.Text>
      <Button variant="primary" type="submit">
        {match?<Link style={{color:"black",textDecoration:"none"}} to='/food'>Login</Link>:"Login"}
      </Button>
    </Form>
    </>
  );
}

export default Login