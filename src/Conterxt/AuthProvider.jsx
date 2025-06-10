import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import { auth } from '../firebase/fire.init';
import axios from 'axios';


const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const gleProvider = new GoogleAuthProvider()
    console.log(user);

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGle =()=>{
        setLoading(true)
        return signInWithPopup(auth, gleProvider)
    }

    const logOutUser =()=>{
       return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
            // if(currentUser?.email){
            //     const userData = {email: currentUser.email}
            //     axios.post('http://localhost:3000/jwt', userData,{
            //         withCredentials: true
            //     })
            //     .then(res=>{
            //         console.log(res.data);
            //     })
            //     .catch(err=>console.log(err))
            // }

            // if(currentUser?.email){
            //     const userData = {email: currentUser.email}
            //     axios.post('http://localhost:3000', userData,{
            //         withCredentials: true
            //     })
            //     .then(res=>{
            //         console.log(res.data);
            //     })
            //     .catch(err=>{
            //         console.log(err);
            //     })
            // }
        })
        return ()=>{
            unsubscribe()
        }
    },[])
   

    const allFunc = {
        createUser,
        user,
        setUser,
        loginUser,
        logOutUser,
        loading,
        signInWithGle
    }

    return (
        <div>
            <AuthContext value={allFunc}>
               {children}
            </AuthContext>
        </div>  
    );
};

export default AuthProvider;