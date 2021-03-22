import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import { GoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux'
import { selectSignedIn, selectUserData, setInput, setSignedIn, setUserData } from '../Feature/UserSlice'
import '../Style/Navbar.css';


export default function Navbar() {

    const [inputValue, setInputValue] = useState('tech');

    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);
    const dispatch = useDispatch();

    const logout = (response) => {
        dispatch(setSignedIn(false));
       dispatch(setUserData(null));
    }

    const handelClick = (e) => {
        e.preventDefault();
        dispatch(setInput(inputValue));
    };


    
    return (
        <div className='navbar' >
            <h1 className='navbar__header'>BlogMania</h1>
            {isSignedIn && 
            (<div className='blog__ssearch'>
                <input className='search'
                 placeholder='Search for a blog'
                 value={inputValue}
                 onChange={(e) => setInputValue(e.target.value)}
                  />
                  <button className='submit' 
                  onClick={handelClick}
                  >
                      Search
                  </button>
                  </div> 
            )}

                   {isSignedIn ? ( <div className='navbar__user__data'>
                       <Avatar 
                       className='user'
                       src={userData?.imageUrl}
                        alt={userData?.name} />
                       <h1 className='signedIn' >{userData?.givenName}</h1>
                         <GoogleLogout 
                          clientId='463212038540-gcdcajolfmb3b9sov81nhrs4lgnt0jqo
                          .apps.googleusercontent.com'
                          render={(renderProps) =>(
                            <button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className='logout__button' 
                            >
                                Logout
                            </button>
                         ) }
                         onLogoutSuccess={logout}
                         />
                   </div>
    
                      )
                      : <h1 className='notSignedIn' >User not available </h1> }
            
        </div>
    )
}
