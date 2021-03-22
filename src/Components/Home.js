//mport { render } from '@testing-library/react'
import React from 'react'
import GoogleLogin from 'react-google-login'
import {useDispatch, useSelector } from 'react-redux';
import { selectSignedIn, setSignedIn, setUserData } from '../Feature/UserSlice';
import '../Style/Home.css';

function HomePage() {
    const isSignedIn = useSelector(selectSignedIn)

    const dispatch = useDispatch();


    const login = (response) => {
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));

    }


    return (
        <div className='home__page' style={{display: isSignedIn ? 'none' : ''}} >
            {!isSignedIn ? 
            <div className='login__mesage'>
                <h2>📗</h2>
                <h1>A Readers favourite place!</h1>
                <p>
                    We provider high quality online resource for reading blogd. 
                    Just sign up and start.
                </p>
                <GoogleLogin
                 clientId='463212038540-gcdcajolfmb3b9sov81nhrs4lgnt0jqo.apps.googleusercontent.com'
                  render={(renderProps) =>(
                     <button
                     onClick={renderProps.onClick}
                     disabled={renderProps.disabled}
                     className='login__button' 
                     >
                         Login with Google
                     </button>
                  ) }
                  onSuccess={login}
                  onFailure={login}
                  isSignedIn={true}
                  cookiePolicy={'single_host_origin'}
                   />
            </div> : ''}
        </div>
    )
}

export default HomePage
