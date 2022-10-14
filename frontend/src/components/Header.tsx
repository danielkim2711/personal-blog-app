import myImage from '../assets/images/daniel_kim.jpeg';

const Header = () => {
  return (
    <div
      className='hero h-[32rem] 2xl:h-[45rem] justify-items-start items-end'
      style={{
        backgroundImage: `url(${myImage})`,
      }}
    >
      <div className='hero-overlay bg-opacity-40'></div>
      <div className='hero-content text-neutral-content 2xl:p-20'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-4xl 2xl:text-5xl font-bold'>
            A LIFESTYLE BLOG BY DANIEL KIM
          </h1>
          <p>
            Kia ora, welcome to my blog! I am a New Zealand based Full Stack
            Engineer. I like to explore new technologies and develop web
            applications. Feel free to leave your comments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
