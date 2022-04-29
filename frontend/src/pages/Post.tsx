import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RootState } from '../app/store';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getPost, reset } from '../features/posts/postSlice';
import { toast } from 'react-toastify';
import { AiOutlineComment } from 'react-icons/ai';

import Spinner from '../assets/images/spinner.gif';

const Post = () => {
  const { post, isError, isLoading, message } = useAppSelector(
    (state: RootState) => state.posts
  );

  const { title, imageUrl, body, category, createdAt } = post;

  const dispatch = useAppDispatch();

  const { postId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getPost(postId!));

    return () => {
      dispatch(reset());
    };

    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <img src={Spinner} alt='loading...' />
      </div>
    );
  }

  return (
    <div className='mt-4 px-4 py-2 md:px-20 lg:px-60 xl:px-80 2xl:px-[500px] 3xl:px-[800px]'>
      <p className='text-green-500 font-semibold text-sm md:text-lg'>
        {category}
      </p>
      <h4 className='text-xl font-semibold md:text-3xl'>{title}</h4>
      <div className='border-b-2 py-8 mb-6'>
        <p className='text-sm'>Daniel Kim</p>
        <p className='text-gray-400 text-xs'>
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
      <img className='' src={imageUrl} alt='' />
      <p className='py-8'>{body}</p>
      <div className='flex items-center mb-4'>
        <AiOutlineComment className='w-7 h-7' />
        <span className='ml-1'>10</span>
      </div>
      <div className='border-b-2'></div>
    </div>
  );
};

export default Post;
