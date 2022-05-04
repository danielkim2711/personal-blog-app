import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { createPost } from '../features/posts/postSlice';

import { AiOutlineClose } from 'react-icons/ai';

const NewPost = () => {
  const [formData, setFormData] = useState({
    title: '',
    imageUrl: '',
    body: '',
  });
  const { title, imageUrl, body } = formData;
  const [category, setCategory] = useState('Programming');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const postData = {
      title,
      imageUrl,
      body,
      category,
    };

    dispatch(createPost(postData));
    navigate('/');
  };

  return (
    <>
      <nav className='p-4 border-b-2'>
        <AiOutlineClose
          className='w-5 h-5 cursor-pointer'
          onClick={() => navigate('/')}
        />
      </nav>

      <main>
        <form onSubmit={handleSubmit}>
          <section className='flex justify-center'>
            <input
              type='text'
              placeholder='Title'
              className='py-3 border-b-2 min-w-[90%] outline-none text-2xl'
              id='title'
              value={title}
              onChange={handleChange}
              required
            />
          </section>
          <section className='flex justify-center'>
            <input
              type='text'
              placeholder='Image Url'
              className='py-3 border-b-2 min-w-[90%] outline-none text-2xl'
              id='imageUrl'
              value={imageUrl}
              onChange={handleChange}
            />
          </section>
          <section className='border-b-2 flex justify-center'>
            <input
              type='text'
              placeholder='body'
              className='py-3 min-w-[90%] min-h-[350px] outline-none text-xl font-light'
              id='body'
              value={body}
              onChange={handleChange}
              required
            />
          </section>
          <section className='mx-4 py-4 border-b-2 flex justify-between items-center'>
            <h1>Category</h1>
            <select
              className='select select-bordered rounded-none select-sm w-full max-w-[250px] md:max-w-lg lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[1400px] 3xl:max-w-[1800px] font-normal'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value='Programming'>Programming</option>
              <option value='Sports'>Sports</option>
              <option value='Misc.'>Misc.</option>
            </select>
          </section>
          <button
            type='submit'
            className='absolute top-4 right-4 text-green-500 font-semibold'
          >
            POST
          </button>
        </form>
      </main>
    </>
  );
};

export default NewPost;
