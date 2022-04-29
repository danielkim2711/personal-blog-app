import { AiOutlineComment } from 'react-icons/ai';

const CommentList = () => {
  return (
    <div
      tabIndex={0}
      className='collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-10'
    >
      <input type='checkbox' className='peer' />
      <div className='collapse-title text-xl font-medium pb-0'>
        <div className='flex items-center mb-4'>
          <AiOutlineComment className='w-6 h-6' />
          <span className='ml-1 text-sm font-light'>Comments 10</span>
        </div>
      </div>
      <div className='collapse-content px-6'>
        <div className='border-t-2 mb-4'></div>
        <div className='flex items-center mb-1'>
          <div className='avatar placeholder mr-1.5'>
            <div className='bg-neutral-focus text-neutral-content rounded-full w-6'>
              <span className='text-xs'>D</span>
            </div>
          </div>
          <h1 className='font-semibold'>Daniel</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illum
          pariatur fugiat porro quasi neque atque veritatis eveniet aspernatur
          impedit voluptates soluta ullam repellendus iure qui asperiores
          corrupti, similique, esse consequatur nostrum nesciunt hic quia? Iste
          beatae, eos voluptatum nisi eveniet ea natus laboriosam officia
          architecto iusto eum vero odit!
        </p>
        <p className='mb-4 text-gray-400 text-xs font-light'>10. 04. 2022</p>
        <div className='flex items-center mb-1'>
          <div className='avatar placeholder mr-1.5'>
            <div className='bg-neutral-focus text-neutral-content rounded-full w-6'>
              <span className='text-xs'>J</span>
            </div>
          </div>
          <h1 className='font-semibold'>James</h1>
        </div>
        <p>Awesome nice!</p>
        <p className='mb-4 text-gray-400 text-xs font-light'>10. 04. 2022</p>
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
            className='input input-bordered w-full'
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
