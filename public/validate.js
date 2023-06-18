import React from 'react';
import { UserContext } from './Context';
import { Card } from './Context';
import { useNavigate } from 'react-router-dom';
import handshake from './handshake.jpg';

function CreateAccount(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loginEmail, setLoginEmail] = React.useState('');
  const [loginPassword, setLoginPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  
  const navigate = useNavigate();

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (label === 'password' && field.length < 8) {
      setStatus('Error: Password should be at least 8 characters long');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password') || password.length < 8) {
      setStatus('Password must be at least 8 characters long');
      setTimeout(() => setStatus(''),3000);
      return;
    }
    ctx.users.push({name,email,password,balance:0});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  function handleLogin() {
    const user = ctx.users.find(user => user.email === loginEmail && user.password === loginPassword);
    if (user) {
      console.log('Login successful');
      navigate('/AllData');
    } else {
      console.log('Login failed');
      setStatus('Login failed');
    }
  }

  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" style={{backgroundImage: `url(${handshake})`}}>
    <header className="mb-auto">
      <div>
        <h3 className="float-md-start mb-0">CyberBank</h3>
      </div>
    </header>
    <main className="px-3">
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} required /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} required /><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} required /><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!name || !email || !password}>Create Account</button>
              </>
            ):(
              <>
              <h5>Account created successfully!</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              <br/>
              <br/>
              Email address<br/>
              <input type="input" className="form-control" id="loginEmail" placeholder="Enter email" value={loginEmail} onChange={e => setLoginEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="loginPassword" placeholder="Enter password" value={loginPassword} onChange={e => setLoginPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
              </>
            )}
    />
    </main>
    <footer className="mt-auto text-white-50">
      <p>Created by Robert Sloan</p>
    </footer>
  </div>
  )
}

export default CreateAccount;
