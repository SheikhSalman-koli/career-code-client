import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { auth } from '../firebase/fire.init';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState()
    const [loader, setLoader] = useState(true)
    console.log(user);

    const createUser =(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser =(email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser =()=>{
       return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoader(false)
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
        loader
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