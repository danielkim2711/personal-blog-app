import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RootState } from '../app/store';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getComments, reset } from '../features/comments/commentSlice';
import { toast } from 'react-toastify';

import { AiOutlineComment } from 'react-icons/ai';
import CommentItem from './CommentItem';

const CommentList = () => {
  const { comments, isError, message } = useAppSelector(
    (state: RootState) => state.comments
  );
  const dispatch = useAppDispatch();

  const { postId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getComments(postId!));

    return () => {
      dispatch(reset());
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div
      tabIndex={0}
      className='collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-10'
    >
      <input type='checkbox' className='peer' />
      <div className='collapse-title text-xl font-medium pb-0'>
        <div className='flex items-center mb-4'>
          <AiOutlineComment className='w-6 h-6' />
          <span className='ml-1 text-sm font-light'>{`Comments ${comments.length}`}</span>
        </div>
      </div>
      <div className='collapse-content px-6'>
        <div className='border-t-2 mb-4'></div>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentItem key={comment._id} comment={comment} />
          ))
        ) : (
          <h5 className='font-light'>
            No Comments Yet. Be the first one to comment!
          </h5>
        )}
        <div className='mt-4 mb-2'>
          <input
            type='text'
            placeholder='Name'
            className='input input-bordered mr-4'
          />
          <input
            type='password'
            placeholder='Password'
            className='input input-bordered'
          />
        </div>
        <div className='relative'>
          <input
            type='text'
            placeholder='Write a comment...'
            className='input input-bordered w-full pr-24'
          />
          <button
            type='submit'
            className='absolute btn btn-active btn-ghost right-0'
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
