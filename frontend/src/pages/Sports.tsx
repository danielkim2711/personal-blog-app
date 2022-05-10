import { useEffect } from 'react';
import { RootState } from '../app/store';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getPosts } from '../features/posts/postSlice';
import { getAllComments } from '../features/comments/commentSlice';

import Spinner from '../assets/images/spinner.gif';
import PostItem from '../components/PostItem';

const Sports = () => {
  const { posts, isLoading } = useAppSelector(
    (state: RootState) => state.posts
  );

  const { comments } = useAppSelector((state: RootState) => state.comments);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getAllComments());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className='flex justify-center'>
        <img src={Spinner} alt='loading...' />
      </div>
    );
  }

  return (
    <>
      <p className='p-4 border-b-2 font-semibold text-center'>SPORTS</p>
      {posts.length > 0 && posts.some((post) => post.category === 'Sports') ? (
        <div className='lg:flex lg:justify-center'>
          <ul className='lg:max-w-[672px] lg:grid lg:grid-cols-2 2xl:max-w-[1000px]'>
            {posts.map(
              (post) =>
                post.category === 'Sports' && (
                  <PostItem key={post._id} post={post} comments={comments} />
                )
            )}
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

export default Sports;
