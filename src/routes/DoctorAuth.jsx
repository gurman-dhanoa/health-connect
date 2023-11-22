import {Navigate} from 'react-router-dom'

export const DoctorAuth = ({ user, children }) => {
    if (user.isAuthenticatedDoctor) {
      return <Navigate to="/doctor/profile" replace />;
    }
    return children;
};
export const DoctorUnAuth = ({ user, children }) => {
    if (!user.isAuthenticatedDoctor) {
      return <Navigate to="/" replace />;
    }
    return children;
};