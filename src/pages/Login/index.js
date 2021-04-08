import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import credentials from '../../services/credentials.json'

import './styles.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    function handleLogin(e) {
        e.preventDefault();
        
        if(username === credentials.username && password === credentials.password){
            history.push('profile', username)

        } else {
            alert('Usuário ou senha incorretas!')
        }

    }

    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>

            <div className="login-main main">
                <div className="login-content">
                    <form className="login-form" onSubmit={handleLogin}>
                        <p>Faça login para acessar as informações.</p>

                        <label htmlFor="username">Usuário</label><br/>
                        <input  type="text" 
                                name="username" 
                                id="username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required
                        ></input><br/>

                        
                        <label htmlFor="password">Senha</label><br/>
                        <input  type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                        ></input><br/>

                        <button className="login-button">Entrar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;