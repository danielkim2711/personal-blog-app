import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RootState } from '../app/store';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getAllComments } from '../features/comments/commentSlice';

import PostItem from './PostItem';
import { RiArrowRightSLine } from 'react-icons/ri';

const MorePost = ({ posts, post }: { posts: any; post: any }) => {
  const { category } = post;

  const { comments } = useAppSelector((state: RootState) => state.comments);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch]);

  //TODO: Add another section to display related posts on post page.

  return (
    <Link
      to={
        category === 'Misc.'
          ? '/categories/miscellaneous'
          : `/categories/${category?.toLowerCase()}`
      }
    >
      <div className='pb-3 border-b-2 flex justify-between items-center'>
        <p className='font-semibold'>
          More <span className='text-green-500'>{category}</span> Posts
        </p>
        <RiArrowRightSLine className='w-6 h-6' />
      </div>

      {/* {posts.length > 0 &&
      posts.some((post: any) => post.category === 'Programming') ? (
        <div className='lg:flex lg:justify-center'>
          <ul className='lg:max-w-[672px] lg:grid lg:grid-cols-2 2xl:max-w-[1000px]'>
            {posts.map(
              (post: any) =>
                post.category === 'Programming' && (
                  <PostItem key={post._id} post={post} comments={comments} />
                )
            )}
          </ul>
        </div>
      ) : (
        <p className='text-2xl p-20 text-center text-gray-400 2xl:text-3xl'>
          No Post Yet
        </p>
      )} */}
    </Link>
  );
};

export default MorePost;
