import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../app/store';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getPosts } from '../features/posts/postSlice';

import { AiOutlineClose } from 'react-icons/ai';

const Categories = () => {
  const { posts } = useAppSelector((state: RootState) => state.posts);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const getNumberOfPostsByCategory = (category: string): number => {
    let numberOfPosts = 0;
    posts.forEach((post) => post.category === category && numberOfPosts++);
    return numberOfPosts;
  };

  return (
    <>
      <nav className='p-3 border-b-2 relative'>
        <AiOutlineClose
          className='w-7 h-7 cursor-pointer absolute'
          onClick={() => navigate(-1)}
        />
        <h1 className='font-semibold text-lg text-center'>Categories</h1>
      </nav>

      <section>
        <ul className='p-5'>
          <Link to='/'>
            <li className='flex justify-between items-center border-b-2 pb-3'>
              <h2 className='font-bold'>All Posts</h2>
              <p className='font-bold'>{posts.length}</p>
            </li>
          </Link>
          <Link to='/programming'>
            <li className='flex justify-between items-center border-b-[1px] py-3'>
              <h2>Programming</h2>
              <p>{getNumberOfPostsByCategory('Programming')}</p>
            </li>
          </Link>
          <Link to='/sports'>
            <li className='flex justify-between items-center border-b-[1px] py-3'>
              <h2>Sports</h2>
              <p>{getNumberOfPostsByCategory('Sports')}</p>
            </li>
          </Link>
          <Link to='/miscellaneous'>
            <li className='flex justify-between items-center border-b-[1px] py-3'>
              <h2>Misc.</h2>
              <p>{getNumberOfPostsByCategory('Misc.')}</p>
            </li>
          </Link>
        </ul>
      </section>
    </>
  );
};

export default Categories;
