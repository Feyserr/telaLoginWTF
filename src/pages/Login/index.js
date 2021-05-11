import React from 'react'
import App from '../../App'
import './login.css'
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = ()=>{
    return (
        <div className="login">
           <div className="login-logo">
               <img 
               src="https://media-exp1.licdn.com/dms/image/C4D0BAQGLrqI03h95OQ/company-logo_200_200/0/1583170451846?e=2159024400&v=beta&t=TACgDEGCIJfii_1_K6SK7sBDLR-wp9jcdgHXme7vgLQ"
               alt = "Login App"
               />
               
           </div>
            <div className = "login-right">
                <h1>Acessar Sistema</h1>
                <div className="login-loginInputEmail">
                <AiOutlineMail />
                    <input
                    type = "email"
                    placeholder = "Email*"
                    
                    />

                </div>
                <div className="login-loginInputPassword">
                    <RiLockPasswordLine/>
                    <input
                    type = "password"
                    placeholder = "Senha*"
    
                    
                    />

                </div>
                <button type = "submit">
                    Entrar
                </button>
                <button type = "submit">
                    Cadastrar
                
                </button>

            </div>

        </div>


    )
}
export default Login;