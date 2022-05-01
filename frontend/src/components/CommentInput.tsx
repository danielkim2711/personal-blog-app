import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { createComment } from '../features/comments/commentSlice';

const CommentInput = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    body: '',
  });
  const { name, password, body } = formData;

  const dispatch = useAppDispatch();
  const { postId } = useParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const commentData = {
      name,
      password,
      body,
    };

    dispatch(createComment({ commentData, postId }));

    setFormData({
      name: '',
      password: '',
      body: '',
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='mt-4 mb-2'>
          <input
            type='text'
            placeholder='Name'
            className='input input-bordered mr-4'
            id='name'
            value={name}
            onChange={handleChange}
            required
          />
          <input
            type='password'
            placeholder='Password'
            className='input input-bordered'
            id='password'
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div className='relative mb-6'>
          <input
            type='text'
            placeholder='Write a comment...'
            className='input input-bordered w-full pr-24'
            id='body'
            value={body}
            onChange={handleChange}
            required
          />
          <button
            type='submit'
            className='absolute btn btn-active btn-ghost right-0'
          >
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CommentInput;
