import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { RootState } from '../app/store';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getPost, deletePost } from '../features/posts/postSlice';
import { getComments } from '../features/comments/commentSlice';
import { toast } from 'react-toastify';

import { BsThreeDotsVertical } from 'react-icons/bs';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegCopy } from 'react-icons/fa';
import CommentList from '../components/CommentList';
import Spinner from '../assets/images/spinner.gif';

const Post = () => {
  const { post, isLoading } = useAppSelector((state: RootState) => state.posts);

  const { user } = useAppSelector((state: RootState) => state.auth);

  const { title, imageUrl, body, category, createdAt } = post;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { postId } = useParams();

  useEffect(() => {
    dispatch(getPost(postId!));
    dispatch(getComments(postId!));
  }, [dispatch, postId]);

  if (isLoading) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <img src={Spinner} alt='loading...' />
      </div>
    );
  }

  return (
    <div className='mt-4 px-5 py-2 md:px-20 lg:px-60 xl:px-80 2xl:px-[500px] 3xl:px-[800px]'>
      <p className='text-green-500 font-semibold text-sm md:text-lg'>
        <Link
          to={
            category === 'Misc.'
              ? '/categories/miscellaneous'
              : `/categories/${category?.toLowerCase()}`
          }
        >
          {category}
        </Link>
      </p>
      <h4 className='text-xl font-semibold md:text-3xl'>{title}</h4>
      <div className='flex justify-between items-center border-b-2 py-7 mb-6'>
        <div className='flex items-center'>
          <Link to='/'>
            <div className='avatar mr-2.5'>
              <div className='w-9 rounded-full'>
                <img
                  src='https://avatars.githubusercontent.com/u/80291484?v=4'
                  alt=''
                />
              </div>
            </div>
          </Link>
          <div className='mb-1.5'>
            <Link to='/'>
              <p className='text-sm font-light'>Daniel Kim</p>
            </Link>
            <p className='text-gray-400 text-xs font-light'>
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
        </div>

        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className=''>
            <BsThreeDotsVertical className='w-6 h-6 cursor-pointer' />
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu mt-2 p-2 shadow bg-base-100 rounded-box w-52'
          >
            {user && (
              <>
                <li>
                  <Link to={`/posts/${postId}/update-post`}>
                    <p>Update Post</p>
                    <HiOutlinePencilAlt className='w-5 h-5' />
                  </Link>
                </li>
                <li>
                  <div
                    className='text-red-500'
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete?')) {
                        dispatch(deletePost(postId!));
                        navigate('/');
                      }
                    }}
                  >
                    <p>Delete Post</p>
                    <RiDeleteBin6Line className='w-5 h-5' />
                  </div>
                </li>
              </>
            )}
            <li>
              <div
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast.success('Link Copied!');
                }}
              >
                <p>Copy URL</p>
                <FaRegCopy />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <img src={imageUrl} alt='' />
      <p className='py-8 whitespace-pre-wrap'>{body}</p>
      <CommentList />
    </div>
  );
};

export default Post;
