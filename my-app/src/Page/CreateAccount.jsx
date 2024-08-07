import React from 'react'
import { auth, provider } from '../FireBase/Firebas';
import { signInWithPopup } from 'firebase/auth';
import GoogleButton from 'react-google-button'


function CreateAccount() {
    
    const hendelogin=()=>{
        signInWithPopup(auth, provider)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
      }
  return (
    <>
    <div>
        <GoogleButton onClick={hendelogin}/>
    </div>
    </>

  )
}

export default CreateAccount