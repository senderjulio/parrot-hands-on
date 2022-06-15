import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// import { Container } from './styles';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    interface AuthContextType {
        user: any;
        signin: (user: string, callback: VoidFunction) => void;
        signout: (callback: VoidFunction) => void;
    }
      
    let AuthContext = React.createContext<AuthContextType>(null!);
    function useAuth() {
        return React.useContext(AuthContext);
      }
    let auth = useAuth();
    let location = useLocation();
  
    if (!auth.user) {

      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
}

export default RequireAuth;