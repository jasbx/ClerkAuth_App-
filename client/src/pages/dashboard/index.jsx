import React from 'react'
import { SignOutButton, UserButton, useUser } from '@clerk/clerk-react'
import Form from './Form';
import List from './List';
import { Link } from 'react-router-dom';
const Dashbord = () => {
  const {user}=useUser();
  return (
    <div style={{margin:'30px'}}>
 <div style={{display:'flex',justifyContent:'space-around'}}>
 <UserButton className='auth-button' />
<button onClick={()=>{window.location.href='/sign'}}> <SignOutButton  className='auth-button' /></button>
 </div>
      <h3>hell <span style={{color:'red'}}>{user?.firstName}</span>! wellcome to new project </h3>
      <Form/>
      <List/>
    </div>
  )
}

export default Dashbord
