import { useParams } from 'react-router-dom';
import { RootState } from '../app/store';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { deleteComment } from '../features/comments/commentSlice';

import { BsThreeDotsVertical } from 'react-icons/bs';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const CommentItem = ({ comment }: { comment: any }) => {
  const { name, body, createdAt } = comment;

  const { user } = useAppSelector((state: RootState) => state.auth);

  const { postId } = useParams();
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    if (!user || !user.isAdmin) {
      const password = prompt('Please enter your password');

      if (!password) {
        return;
      } else {
        dispatch(
          deleteComment({ _id: '', password, postId, commentId: comment._id })
        );
      }
    } else {
      if (window.confirm('Are you sure you want to delete?')) {
        dispatch(
          deleteComment({
            _id: user._id,
            password: '',
            postId,
            commentId: comment._id,
          })
        );
      }
    }
  };

  return (
    <>
      <div className='flex justify-between'>
        <div>
          <div className='flex items-center mb-1'>
            <div className='avatar placeholder mr-1.5'>
              <div className='bg-neutral-focus text-neutral-content rounded-full w-6'>
                <span className='text-xs'>{name.charAt(0).toUpperCase()}</span>
              </div>
            </div>
            <h5 className='font-semibold'>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </h5>
          </div>
          <p className='font-light'>{body}</p>
          <p className='mb-4 text-gray-400 text-xs font-light'>
            {new Date(createdAt)
              .toLocaleString('en-NZ', {
                hour12: false,
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
              })
              .replace(/[,/]/gi, '. ')}
          </p>
        </div>
        <div className='dropdown dropdown-left dropdown-end'>
          <label tabIndex={0} className=''>
            <BsThreeDotsVertical className='w-6 h-6 cursor-pointer' />
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu mt-2 p-1 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <div onClick={() => alert('Coming Soon!')}>
                <p>Update Comment</p>
                <HiOutlinePencilAlt className='w-5 h-5' />
              </div>
            </li>
            <li>
              <div className='text-red-500' onClick={handleDelete}>
                <p>Delete Comment</p>
                <RiDeleteBin6Line className='w-5 h-5' />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CommentItem;
