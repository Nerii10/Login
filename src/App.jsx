import { useState } from 'react';

export default function App() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [Action, setAction] = useState('Login')


  const handleRegister = async () => {
    const response = await fetch('https://fastidious-lolly-dbd5a5.netlify.app/.netlify/functions/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login, password }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  const handleLogin = async () => {
    const response = await fetch('https://fastidious-lolly-dbd5a5.netlify.app/.netlify/functions/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login, password }),
    });

    const data = await response.json();
    setMessage(data.message);
  };


  function handleAction(Action) {
      setAction(Action)
  }

  return (
    <>
   
    <div style={{position:"absolute",top:"5%",width:"80%",textAlign:"center",}}> <p>do not register with your real password</p></div>
    <div className='wrapper'>
      <div className='container'>
          <div className='login' style={{display:(Action=="Login" ? "flex" : "none")}}>
            <h1>Login</h1>
            <div></div>
            <div style={{display:"flex",flexDirection:"column", justifyContent:"space-between", alignItems:'center',width:"100%"}}>
              <h3>Username</h3>
              <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>

            <div style={{display:"flex",flexDirection:"column", justifyContent:"space-between", alignItems:'center',width:"100%"}}>
              <h3>Password</h3>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='buttons'>
            <button onClick={handleLogin}>Login</button>
            </div>

            <p onClick={()=>handleAction("Register")}>Sign in</p>

          </div>

          <div className='login' style={{display:(Action=="Register" ? "flex" : "none")}}>
            <h1>Register</h1>
            <div></div>
            <div style={{display:"flex",flexDirection:"column", justifyContent:"space-between", alignItems:'center',width:"100%"}}>
              <h3>Username</h3>
              <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>

            <div style={{display:"flex",flexDirection:"column", justifyContent:"space-between", alignItems:'center',width:"100%"}}>
              <h3>Password</h3>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='buttons'>
            <button onClick={() => { handleAction("Login"); handleRegister(); }} className='button'>Register</button>

          </div>
          </div>
          {message && <p className='Message'>{message}</p>}

        </div>

      </div>

    </>
  );
}
