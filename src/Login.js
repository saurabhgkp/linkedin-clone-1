import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import './Login.css';
import {auth} from "./firebase";
import { login } from './features/userSlice';


function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [profilePic,setprofilePic] = useState("");
    const dispatch = useDispatch();


    const loginToApp = (e) => {
        e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(
        (userAuth) => {
          dispatch(login({
            email:userAuth.email,
            uid:userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          }) 
           ); 
        })  .catch((error)=>alert(error));  
        };

    
    const register = () => {
        if(!name) {
        return alert("Please Enter Full Name");
    }
    auth.createUserWithEmailAndPassword(email, password).then(
        (userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(()=> {
                 dispatch(
                     login({
                     email: userAuth.user.email,
                     uid: userAuth.user.uid,
                     displayName:name,
                     photoURL:profilePic,
                 })
                 );
            });
        
    
    }).catch((error) => alert(error));

};

    return (
        <div className="login">
            <h6>For sign up copy past email id and password: </h6> <h5>s@gmail.com</h5> <h5>123456</h5> 
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" 
            alt=""/>
             <form>
                 <input value={name} onChange={(e)=> setName(e.target.value)}  placeholder="Full Name ( reuired if registering )" type="text" />
                 
                 <input value={profilePic} onChange={(e)=> setprofilePic(e.target.value)} placeholder="Profile pic URL (optional)" type="text"/>
               
                 <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" type="email" />
             
                 <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
                 
                 <button type="submit" onClick={loginToApp}>Sign Up</button>
             </form>
            <p>Not Member? {"  "}
            <span className="login__register" onClick={register}>Register New </span>
            </p>
        </div>
    )
}

export default Login;
