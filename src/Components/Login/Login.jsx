
import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

import "./Login.css";

const Login = () => {
{/* variáveis que vão extrair do hookusestate 2 coisas(consultar valor e alterar valor) a primeira lê e a segunda altera*/}
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  {/* função que realizará o envio do formulário, o event e ára que a página não recarreque ele é usado com a chamada onsubmid no form preventdefault previne que o form seja enviado*/}
  const HandleSubmid = (event) => {
    event.preventDefault();
    
    alert("Enviando os dados !" + username + " - " + password);
  };
  return (
    <div className="container">
        <form onSubmit={HandleSubmid}>
            <h1>Bem vindo!</h1>
            <div className="input-field">
            <input 
            type='email' 
            placeholder='E-mail'
            required 
            onChange={(e) => setUsername(e.target.value)}/>
            <FaUser className = "icon" />
            </div>
            <div className="input-field" >
            <input
            type='password' 
            placeholder='Senha'
            requires 
             onChange={(e) => setPassword(e.target.value)}/>
            <FaLock className = "icon" />
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembrar de mim ?
                </label>
                <a href="#">Esqueci minha senha!</a>
            </div>
          
            <button type="submit">Login</button>

            <div className="signup-link">
              <p>
                Não tem uma conta? <a href="#">Registrar</a>
              </p>
            </div>
        </form>
    </div>
  )
}

export default Login

{/* onChange={(e) => setUsername(e.target.value)}/> pega o evento e atribui a variavel atraves do set o e é o evento*/}