import React from 'react';
import '../../App.css';
import '../../index.css';
import {SignedIn,SignedOut,SignInButton,SignOutButton,UserButton} from '@clerk/clerk-react'
const Auth = () => {
  return (
    <div className='auth-container'>
    <h1>Sign In</h1>
    <SignedOut>
      <div className='auth-buttons'>
      
        <SignInButton className='auth-button' mode='modal' />
      </div>
    </SignedOut>
    <SignedIn>
    </SignedIn>
  </div>
  )
}

export default Auth
