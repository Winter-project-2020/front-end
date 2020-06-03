import React from 'react'

import { Button, Navbar, Nav } from 'react-bootstrap';
import { Checkbox } from '@material-ui/core';
import { Link } from "react-router-dom";

import classNames from 'classnames/bind';


function LoginPage() {
    return (
        <div className="loginpage">
            
            <Navbar bg="dark" variant="dark" style={{ marginBottom: '10%' }}>
                <Navbar.Brand href="/" style={{  }}>Study</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>myPage</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>    
            </Navbar>


            <Link to={'/register'} className="gotoregister" style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginRight: '3rem'
              
            }}>Register here!</Link>
            <div className="login_form">
                <div className="login_title" 
                    style={{ 
                        textAlign: 'center', 
                        textSize: '20sp' 
                    }}
                >
                    Login page
                </div>
                <div className={"login_username"} style={{ padding: '30px' }}>
                <input style={{ type: 'email' }}></input>           
            </div>
            
            <div className={"login_password"}>
                <input style={{ type: 'password' }}></input>
            </div>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginRight: '50px'
            }}>
                Forgot your password?
            </div>
           
            <div 
                className="login_button_inner" 
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    
            }}>
                <Button variant="info" style={{ marginRight: '20px', radius: '10px' }}>Log in</Button>
                <div><Checkbox />Remember my login on this computer</div>
            </div>

            <div 
                style={{                 
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginRight: '50px'
                }}>Go back to the website</div>
        </div>
    )
}

export default LoginPage;
