import React from 'react';
import { Route , Redirect} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user} = useAuth();
    return (
        <Route
        {...rest}
        render = {({location}) => user.email? children : <Redirect
        to={{
            pathname: '/Register',
            state :{ from:location }
        }}
        
        ></Redirect>}
        
        >

        </Route>
    );
};

export default PrivateRoute;