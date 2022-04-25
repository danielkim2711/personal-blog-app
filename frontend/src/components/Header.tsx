import React from 'react';
import myImage from '../assets/images/daniel_kim.jpeg';

const Header = () => {
  return (
    <div
      className='hero h-[32rem] 2xl:h-[45rem] place-items-end'
      style={{
        backgroundImage: `url(${myImage})`,
      }}
    >
      <div className='hero-overlay bg-opacity-40'></div>
      <div className='hero-content text-neutral-content lg:p-10'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-4xl 2xl:text-5xl font-bold'>
            A LIFESTYLE BLOG BY DANIEL KIM
          </h1>
          <p className='mb-5'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
