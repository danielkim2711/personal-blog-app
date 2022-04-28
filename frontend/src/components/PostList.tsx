import { useEffect } from 'react';
import { RootState } from '../app/store';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getPosts, reset } from '../features/posts/postSlice';
import { toast } from 'react-toastify';

import Spinner from '../assets/images/spinner.gif';
import PostItem from './PostItem';

const PostList = () => {
  const { posts, isError, isLoading, message } = useAppSelector(
    (state: RootState) => state.posts
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getPosts());

    return () => {
      dispatch(reset());
    };

    //eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <div className='flex justify-center'>
        <img src={Spinner} alt='loading...' />
      </div>
    );
  }

  return (
    <>
      <p className='p-4 border-b-2 font-semibold text-center'>RECENT POSTS</p>
      {posts.length > 0 ? (
        <div className='lg:flex lg:justify-center'>
          <ul className='lg:max-w-[672px] lg:grid lg:grid-cols-2'>
            {posts.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </ul>
        </div>
      ) : (
        <p className='text-2xl p-20 text-center text-gray-400 2xl:text-3xl'>
          No Post Yet
        </p>
      )}
    </>
  );
};

export default PostList;
