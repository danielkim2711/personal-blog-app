import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../app/store';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { login, reset } from '../features/auth/authSlice';
import { toast } from 'react-toastify';

import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Spinner from '../assets/images/spinner.gif';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const { user, isError, isSuccess, isLoading, message } = useAppSelector(
    (state: RootState) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <img src={Spinner} alt='loading...' />
      </div>
    );
  }

  return (
    <div className='px-5 py-4 md:px-32 lg:px-72 xl:px-96 2xl:px-[650px] 3xl:px-[1000px]'>
      <IoMdArrowRoundBack
        className='cursor-pointer w-7 h-7 mb-4'
        onClick={() => navigate(-1)}
      />

      <form
        className='min-h-[50vh] flex flex-col justify-end'
        onSubmit={handleSubmit}
      >
        <h4 className='text-center mb-6 text-slate-600 md:text-lg xl:text-xl'>
          A Lifestyle blog by Daniel Kim
        </h4>
        <div className='relative'>
          <AiOutlineUser className='absolute top-3.5 left-3 w-5 h-5 text-slate-400' />
          <input
            type='email'
            placeholder='Email'
            className='input input-bordered rounded-t-md rounded-b-none w-full px-10 py-6'
            id='email'
            onChange={handleChange}
            required
          />
        </div>
        <div className='relative'>
          <AiOutlineLock className='absolute top-4 left-3 w-5 h-5 text-slate-400' />
          <input
            type='password'
            placeholder='Password'
            className='input input-bordered rounded-b-md rounded-t-none border-t-0 w-full px-10 py-6'
            id='password'
            onChange={handleChange}
            required
          />
        </div>
        <button
          type='submit'
          className='btn btn-block btn-success no-animation mt-4 text-white normal-case text-lg bg-green-500'
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
