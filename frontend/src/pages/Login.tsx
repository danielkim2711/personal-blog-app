import React from 'react';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

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
          />
        </div>
        <div className='relative'>
          <AiOutlineLock className='absolute top-4 left-3 w-5 h-5 text-slate-400' />
          <input
            type='password'
            placeholder='Password'
            className='input input-bordered rounded-b-md rounded-t-none border-t-0 w-full px-10 py-6'
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
