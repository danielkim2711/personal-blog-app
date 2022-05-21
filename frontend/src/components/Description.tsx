import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Description = () => {
  return (
    <div className='pt-4 pb-4 border-y-8 text-center flex flex-col items-center'>
      <h2 className='text-lime-500 font-semibold tracking-widest 2xl:text-xl'>
        WHO AM I?
      </h2>
      <p className='mt-2 2xl:text-2xl'>
        BCS student at Unitec, future front-end dev 💪
      </p>
      <ul className='flex'>
        <li className='mr-2'>
          <a
            href='https://github.com/danielkim2711'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub className='mt-2 w-8 h-8 2xl:w-9 2xl:h-9' />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/daniel-kim-674aa413b'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin className='mt-2 w-8 h-8 2xl:w-9 2xl:h-9' />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Description;
