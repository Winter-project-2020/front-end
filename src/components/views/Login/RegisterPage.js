import React from 'react';
import './RegisterPage.scss';

import { MdCheckBox, MdTrendingFlat } from 'react-icons/md';
import Header from '../Header/Header';


function RegisterPage() {
    
    return (

        <div className="registerPage">
            <Header />
            <div className="floater"></div>
            <div className="content-box-signup">
                <h1>Sign up</h1>

            <div className="row">
                <form 
                    className="new_user" 
                    id="new_user" 
                    action="/" 
                    acceptCharset="UTF-8" 
                    method="post">

                    <div className="form-group">
                        <div className="control-input">
                            <label className="control-label" for="user_name">Full Name</label>
                            <br />
                            <input autoFocus="autofocus" type='text' />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="control-input">
                            <label className="control-label" for="user_email">Email Address</label>
                            <br />
                            <input autoFocus="autofocus" type='email' />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="control-input">
                            <label className="control-label" for="user_password">Password</label>
                            <br />
                            <input autoFocus="autofocus" type='password' />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="control-input">
                            <label className="control-label" for="user_password">Confirm Password</label>
                            <br />
                            <input autoFocus="autofocus" type='password' />
                        </div>
                    </div>

                    <div className="checkbox_inner">
                        <MdCheckBox /><div>I agree to the Terms of User</div>
                    </div>

                    <div>
                        <button>Sign up</button>
                        <div>Sign in</div><MdTrendingFlat />
                    </div>

                </form>
                
            </div>
                
               
                
    



        </div>
        </div>
    );
}

export default RegisterPage;
