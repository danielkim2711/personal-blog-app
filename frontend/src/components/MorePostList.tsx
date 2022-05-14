import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RootState } from '../app/store';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getAllComments } from '../features/comments/commentSlice';

import MorePostItem from './MorePostItem';

import { RiArrowRightSLine } from 'react-icons/ri';

const MorePostList = ({
  posts,
  post,
  postId,
}: {
  posts: any;
  post: any;
  postId: string | undefined;
}) => {
  const { category } = post;

  const { comments } = useAppSelector((state: RootState) => state.comments);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch]);

  return (
    <>
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
      </Link>
      {posts.length > 0 &&
      posts.some((post: any) => post.category === category) ? (
        <ul>
          {posts.map(
            (post: any) =>
              post.category === category && (
                <MorePostItem
                  key={post._id}
                  post={post}
                  comments={comments}
                  postId={postId}
                />
              )
          )}
        </ul>
      ) : (
        <p className='text-2xl p-20 text-center text-gray-400 2xl:text-3xl'>
          No Post Yet
        </p>
      )}
    </>
  );
};

export default MorePostList;
