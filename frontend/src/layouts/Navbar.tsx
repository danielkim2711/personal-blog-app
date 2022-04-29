import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../app/store';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { logout, reset } from '../features/auth/authSlice';

import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch, FaSignInAlt } from 'react-icons/fa';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { GoSignOut } from 'react-icons/go';

const Navbar = () => {
  const { user } = useAppSelector((state: RootState) => state.auth);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <div className='navbar bg-base-100 border-b-4 2xl:min-h-[5rem]'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <GiHamburgerMenu className='w-5 h-5 2xl:w-7 2xl:h-7' />
          </label>
          <ul
            tabIndex={0}
            className='menu dropdown-content mt-4 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/portfolio'>Portfolio</Link>
            </li>
            {user && (
              <li>
                <Link to='/new-post'>
                  <HiOutlinePencilAlt className='w-5 h-5 2xl:w-7 2xl:h-7' />
                  <p>Write Post</p>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className='navbar-center'>
        <Link to='/' className='font-semibold text-xl 2xl:text-2xl'>
          Daniel's Blog
        </Link>
      </div>
      <div className='navbar-end'>
        <button className='btn btn-ghost btn-circle'>
          <FaSearch className='w-5 h-5 2xl:w-7 2xl:h-7' />
        </button>
        {user ? (
          <button className='btn btn-ghost btn-circle' onClick={handleLogout}>
            <GoSignOut className='w-5 h-5 2xl:w-7 2xl:h-7' />
          </button>
        ) : (
          <Link to='/login'>
            <button className='btn btn-ghost btn-circle'>
              <FaSignInAlt className='w-5 h-5 2xl:w-7 2xl:h-7' />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
