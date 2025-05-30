import React, { use } from 'react';
import { AuthContext } from '../Conterxt/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user,  loading} = use(AuthContext)
    const location = useLocation()
    // console.log(location);
    if(loading){
        return <>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </>
    }

    if(!user){
        return <Navigate to='/signin' state={location.pathname}></Navigate>
    }

    return children
};

export default PrivateRoute;