import React from 'react';
import { UserContext } from './Context';
import { Card } from './Context';
import { useNavigate } from 'react-router-dom';
import handshake from './handshake.jpg';
import { Form } from 'react-formio';

function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
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
    return true;
}

function handleCreate(){
  console.log(name,email,password);
  if (!validate(name,     'name'))     return;
  if (!validate(email,    'email'))    return;
  if (!validate(password, 'password')) return;
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
    <>
            <div className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column' style={{backgroundImage: `url(${handshake})`}}>
            <header className='mb-auto'>
                <div>
                <h3 className='float-md-start mb-0'>CyberBank</h3>
                </div>
            </header>
            <main className='px-3'>
    />
  <Card>
    bgcolor='primary'
    header='Create Account'
    status={status}
    body={show ? (  
            <>
            Name<br/>
            <input type='input' className='form-control' id='name' placeholder='Enter name' value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
            Email address<br/>
            <input type='input' className='form-control' id='email' placeholder='Enter email' value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
            Password<br/>
            <input type='password' className='form-control' id='password' placeholder='Enter password' value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
            <button type='submit' className='btn btn-light' onClick={handleCreate}>Create Account</button>
            </>
          ):(
            <>
            <button type='submit' className='btn btn-light' onClick={clearForm}>Add another account</button>
            <br/>
            <br/>
           {
            "appId": "f210919d-acfc-498a-afb3-ed2c379a5176",
            "fileType": "js",
            "fileName": "CreateAccount_Part1.js",
            "content": "import React from 'react';\nimport { UserContext } from './Context';\nimport { Card } from './Context';\nimport { useNavigate } from 'react-router-dom';\nimport handshake from './handshake.jpg';\nimport { Form } from 'react-formio';\n\nfunction CreateAccount(){\n  const [show, setShow]         = React.useState(true);\n  const [status, setStatus]     = React.useState('');\n  const [name, setName]         = React.useState('');\n  const [email, setEmail]       = React.useState('');\n  const [password, setPassword] = React.useState('');\n  const [loginEmail, setLoginEmail] = React.useState('');\n  const [loginPassword, setLoginPassword] = React.useState('');\n  const ctx = React.useContext(UserContext);  \n  const navigate = useNavigate();"
            }
</Card>
<>
              <button type='submit' className='btn btn-light' onClick={clearForm}>Add another account</button>
              <br/>
              <br/>
              Email address<br/>
              <input type='input' className='form-control' id='loginEmail' placeholder='Enter email' value={loginEmail} onChange={e => setLoginEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type='password' className='form-control' id='loginPassword' placeholder='Enter password' value={loginPassword} onChange={e => setLoginPassword(e.currentTarget.value)}/><br/>
              <button type='submit' className='btn btn-light' onClick={handleLogin}>Login</button>
              </>
            )}
    </>
    </main>
    <footer className='mt-auto text-white-50'>
      <p>Created by Robert Sloan</p>
    </footer>
  </div>

  )
}

export default CreateAccount;
this stuff is driving me out of my skull 