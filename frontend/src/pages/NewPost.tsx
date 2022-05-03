import { useNavigate } from 'react-router-dom';

import { AiOutlineClose } from 'react-icons/ai';

const NewPost = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className='border-b-2'>
        <ul className='p-4 flex justify-between items-center'>
          <li className='cursor-pointer' onClick={() => navigate('/')}>
            <AiOutlineClose className='w-5 h-5' />
          </li>
          <li>
            <h1 className='text-green-500 font-semibold'>POST</h1>
          </li>
        </ul>
      </nav>

      <main>
        <section className='flex justify-center'>
          <input
            type='text'
            placeholder='Title'
            className='py-3 border-b-2 min-w-[90%] outline-none text-2xl'
            id='title'
            // value={name}
            // onChange={handleChange}
            required
          />
        </section>
        <section className='flex justify-center'>
          <input
            type='text'
            placeholder='Image Url'
            className='py-3 border-b-2 min-w-[90%] outline-none text-2xl'
            id='imageUrl'
            // value={name}
            // onChange={handleChange}
            required
          />
        </section>
        <section className='border-b-2 flex justify-center'>
          <input
            type='text'
            placeholder='body'
            className='py-3 min-w-[90%] min-h-[350px] outline-none text-xl font-light'
            id='body'
            // value={name}
            // onChange={handleChange}
            required
          />
        </section>
        <section className='mx-4 py-4 border-b-2 flex justify-between items-center'>
          <h1>Category</h1>
          <select
            defaultValue={'DEFAULT'}
            className='select select-bordered rounded-none select-sm w-full max-w-[250px] md:max-w-lg lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1400px] 3xl:max-w-[1800px] font-normal'
          >
            <option value='DEFAULT'>Programming</option>
            <option value='1'>Sports</option>
            <option value='2'>Misc.</option>
          </select>
        </section>
      </main>
    </>
  );
};

export default NewPost;
