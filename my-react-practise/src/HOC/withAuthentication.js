import React from 'react';
import { Link } from 'react-router-dom';

export const withAuthentication = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const isAuthenticated = true; 
    if (!isAuthenticated) {
      return <Link to="/" />; 
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuthentication;