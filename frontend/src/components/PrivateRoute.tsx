import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';
import Spinner from '../assets/images/spinner.gif';

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <img src={Spinner} alt='loading...' />
      </div>
    );
  }

  return loggedIn ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
