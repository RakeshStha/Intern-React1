
import React from 'react';
import socialMediaAuth from '../../service/auth';
// import {GoogleLogin, GoogleLogout} from 'react-google-login';
import '../Login/login.css';
// import {app} from '../../config/firebase-config'

import {facebookProvider, googleProvider} from '../../config/authMethod'

const Login = () => {
    // const [currentuser, setCurrentUser] = useState()

    // useEffect(() => {
    //     app.auth().onAuthStateChanged((user)=> {
    //         setCurrentUser(user)
    //     })
    // }, [])

    const handleOnClick = async (provider) => {
        const res = await socialMediaAuth(provider);
        console.log(res);
    }

//     const [names, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [url, setUrl] = useState("");

//     const responseGoogle = (response)=>{
//     console.log(response);
//     console.log(response.profileObj);
//     setName(response.profileObj.name);
//     setEmail(response.profileObj.email);
//     setUrl(response.profileObj.imageUrl);  
//   }


    return (
      <div>
       <div className="login">
            {/* <div>
                <h1>Welcome: {currentuser.displayName}</h1>
                <h2>Email: {currentuser.email}</h2>
                <img src={currentuser.photoURL} alt="avatar"/>
                
            </div>   */}
                        <div className="login-content">
                        <h1>Login</h1>
                        <button onClick={() => handleOnClick(googleProvider)}>Google</button>
                        <button onClick={() => handleOnClick(facebookProvider)}>Facebook</button>
                            
                        
                            <form method="post" className = "login-form">
                                
                                <div className="input">
                                    <input type="text" name="u" placeholder="Username" required="required" />
                                </div>
                                <div className="input">
                                    <input type="password" name="p" placeholder="Password" required="required" />
                                </div>
                                <div className="container-button">
                                    <div >
                                        <button type="submit" className="login-button">Login</button>
                                    </div>   
                                </div>  
                            </form>
                        </div>
                    </div>
      </div>
    )

}

export default Login

