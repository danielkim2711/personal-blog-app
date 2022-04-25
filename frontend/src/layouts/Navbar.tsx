import { Link } from 'react-router-dom';
import { FaSearch, FaSignInAlt } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 border-b-4 2xl:min-h-[5rem]'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <GiHamburgerMenu className='w-5 h-5 2xl:w-7 2xl:h-7' />
          </label>
          <ul
            tabIndex={0}
            className='menu dropdown-content mt-3 p-1 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/portfolio'>Portfolio</Link>
            </li>
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
        <button className='btn btn-ghost btn-circle'>
          <Link to='/login'>
            <FaSignInAlt className='w-5 h-5 2xl:w-7 2xl:h-7' />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
