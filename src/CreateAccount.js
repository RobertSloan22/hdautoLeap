import React from 'react';
import { UserContext } from './Context';
import { Card } from './Context';
import './CreateAccount.module.css'

function CreateAccount(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loginEmail, setLoginEmail] = React.useState('');
  const [loginPassword, setLoginPassword] = React.useState('');

  const ctx = React.useContext(UserContext);

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
    if (!validate(name,     'name')  || name.length < 3 )  {
      setStatus('Error: Provide name');
      setTimeout(() => setStatus(''),3000);
      return;
    }   
    if (!validate(email,    'email')  || email.length < 6)  {
      setStatus('Error: Provide valid email');
      setTimeout(() => setStatus(''),3000);
      return;
    }  
    if (!validate(password, 'password') || password.length < 8) {
      setStatus('Password must be at least 8 characters long');
      setTimeout(() => setStatus(''),3000);
      return;
    }
    ctx.users.push({name,email,password,balance:0});
    setShow(false);
  }

  function handleLogin() {
    const user = ctx.users.find(u => u.email === loginEmail && u.password === loginPassword);
    if (user) {
      ctx.setLoggedInUser(user);
      setStatus('Login successful!');
    } else {
      setStatus('Invalid email or password');
    }
  }
  
  
  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <div className="grid-container">
      <div>
        <h3 className="header-text">CyberBank</h3>
      </div>
      <div className="grid-item">
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
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
            </>
          )}
        />
      </div>
      <div className="grid-item">
        <Card
          bgcolor="primary"
          header="Login"
          status={status}
          body={(
            <>
            Email address<br/>
            <input type="input" className="form-control" id="loginEmail" placeholder="Enter email" value={loginEmail} onChange={e => setLoginEmail(e.currentTarget.value)} required /><br/>
            Password<br/>
            <input type="password" className="form-control" id="loginPassword" placeholder="Enter password" value={loginPassword} onChange={e => setLoginPassword(e.currentTarget.value)} required /><br/>
            <button type="submit" className="btn btn-light" onClick={handleLogin} disabled={!loginEmail || !loginPassword || loginEmail.length < 6 || loginPassword.length < 8}>Login</button>
            </>
          )}
        />
      </div>
    </div>
  );
}

export default CreateAccount;
