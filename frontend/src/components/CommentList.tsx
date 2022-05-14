import { RootState } from '../app/store';
import { useAppSelector } from '../app/hooks';

import { AiOutlineComment } from 'react-icons/ai';
import CommentInput from './CommentInput';
import CommentItem from './CommentItem';

import Spinner from '../assets/images/spinner.gif';

const CommentList = ({ postId }: { postId: string | undefined }) => {
  const { comments, isLoading } = useAppSelector(
    (state: RootState) => state.comments
  );

  if (isLoading) {
    return (
      <div className='flex justify-center'>
        <img src={Spinner} alt='loading...' />
      </div>
    );
  }

  return (
    <div
      tabIndex={0}
      className='collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-10'
    >
      <input type='checkbox' className='peer' />
      <div className='collapse-title text-xl font-medium pb-0'>
        <div className='flex items-center mb-4'>
          <AiOutlineComment className='w-6 h-6' />
          <span className='ml-1 text-sm font-light'>{`Comments ${
            comments.filter((comment) => comment.post === postId).length
          }`}</span>
        </div>
      </div>
      <div className='collapse-content px-6'>
        <div className='border-t-2'></div>

        <CommentInput />

        {comments.filter((comment) => comment.post === postId).length > 0 ? (
          comments.map(
            (comment) =>
              comment.post === postId && (
                <CommentItem key={comment._id} comment={comment} />
              )
          )
        ) : (
          <h5 className='font-light'>
            No Comments Yet. Be the first one to comment!
          </h5>
        )}
      </div>
    </div>
  );
};

export default CommentList;
