import React from 'react';
import classes from './login-container.module.scss';

const LoginContainer = ({children}) => {
    return (
      
            <div className={classes.loginContainer}>
                <div className={classes.title}>Login</div>
                <div className={classes.description}>Please entern your Login and your Password</div>            
                {children}
            </div>
         
    )
  }
  
  export default LoginContainer;
