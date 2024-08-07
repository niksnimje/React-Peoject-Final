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
            <div className="row text-center">
                <div className="col-6">
                    <form action="">
                        <h3>Fill the Ditails</h3>
                        <input  type="text" placeholder='First Name ' /> <br /> <br />
                        <input type="text" placeholder='Last Name' />
                        <br /> <br />
                        <input type="number" placeholder='Number' /> <br /><br />
                        <input type="number" placeholder='Age' />
                        <br /><br />
                        <select name="" id="">
                            <option value="">Select Brithday Month</option>
                            <option value="">January</option>
                            <option value="">February</option>
                            <option value="">March</option>
                            <option value="">April</option>
                            <option value="">May</option>
                            <option value="">June</option>
                            <option value="">July</option>
                            <option value="">August</option>
                            <option value="">September</option>
                            <option value="">Octomber</option>
                            <option value="">Novamber</option>
                            <option value="">December</option>
                        </select>
                        <select name="" id="">
                            <option value="">Select Brithday Date</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                            <option value="">11</option>
                            <option value="">12</option>
                            <option value="">13</option>
                            <option value="">14</option>
                            <option value="">15</option>
                            <option value="">16</option>
                            <option value="">17</option>
                            <option value="">18</option>
                            <option value="">19</option>
                            <option value="">20</option>
                            <option value="">21</option>
                            <option value="">22</option>
                            <option value="">23</option>
                            <option value="">24</option>
                            <option value="">25</option>
                            <option value="">26</option>
                            <option value="">27</option>
                            <option value="">28</option>
                            <option value="">29</option>
                            <option value="">30</option>
                            <option value="">31</option>
                        </select>
                        <br /><br />

                        <input type="email" placeholder='Enter You Email' /> <br /><br />
                        <input type="password" placeholder='Enter You Password' /> <br /><br />
                        <input type="password" placeholder='Confime Password' />
                    </form>
                </div>
                <div className="col-6 ">
                    <h3>Continue with</h3>
                    <div  style={{marginLeft:"28%"}}>
                    <GoogleButton onClick={hendelogin}  />    
                    </div> <br />
                    <FacebookLogin onClick={hendelogin}/>
                </div>
            </div>
        </div>
    </div>

    </>

  )
}

export default CreateAccount