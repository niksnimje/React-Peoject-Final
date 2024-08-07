import React from 'react'
import { auth, provider, provider2 } from '../FireBase/Firebas';
import { signInWithPopup } from 'firebase/auth';
import GoogleButton from 'react-google-button'
import FacebookLogin from 'react-facebook-login';


function CreateAccount() {
    
    const hendelogin=()=>{
        signInWithPopup(auth, provider, provider2)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
      }
  return (
    <>
    <div>
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <form action="">
                        <input type="text" placeholder='First Name' />
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div>
        <GoogleButton onClick={hendelogin}/>
        <FacebookLogin onClick={hendelogin}/>
    </div>
    </>

  )
}

export default CreateAccount