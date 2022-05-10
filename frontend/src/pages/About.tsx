const About = () => {
  return (
    <div className='min-h-[90vh] p-6 md:px-20 lg:px-32 xl:px-52 2xl:px-72 3xl:px-96 flex flex-col justify-center'>
      <h1 className='text-2xl md:text-5xl lg:text-6xl mb-4'>
        Daniel's Personal Blog App
      </h1>
      <p className='text-lg md:text-2xl font-light'>
        This is a personal blog application built with the MERN Stack (MongoDB,
        Express.js, React.js and Node.js).
      </p>
      <p className='text-lg md:text-2xl font-light'>
        Addition to that, Tailwind CSS and daisyUI are used for the styles.
      </p>
      <p className='text-lg md:text-2xl font-light'>
        Users are not meant to create, update or delete a post, but they can
        freely view, create or delete a comment by setting up their personal
        name and password in the comment section.
      </p>
      <p className='text-lg md:text-2xl font-light'>
        This website is fully responsible to any screen sizes, and all passwords
        entered by users are safely salted and hashed by bcryptjs.
      </p>
      <p className='my-4 text-lg md:text-2xl font-light'>
        You can find me on{' '}
        <strong>
          <a
            href='https://github.com/danielkim2711'
            target='_blank'
            rel='noreferrer'
          >
            GitHub{' '}
          </a>
        </strong>
        and{' '}
        <strong>
          <a
            href='https://www.linkedin.com/in/daniel-kim-674aa413b'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn.
          </a>
        </strong>
      </p>
      <p className='text-lg text-gray-400'>
        Layout Inspired By:
        <a
          className='text-green-500 font-semibold'
          href='https://www.naver.com/'
          target='_blank'
          rel='noreferrer'
        >
          {' '}
          Naver Corporation
        </a>
      </p>
    </div>
  );
};

export default About;
