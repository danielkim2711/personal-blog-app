import { Link } from 'react-router-dom';

import { AiOutlineComment } from 'react-icons/ai';

const MorePostItem = ({
  post,
  comments,
  postId,
}: {
  post: any;
  comments: any;
  postId: string | undefined;
}) => {
  return (
    <Link key={post._id} to={`/posts/${post._id}`}>
      <li className='flex py-4 justify-between items-center border-b-2 cursor-pointer md:py-6'>
        {post.imageUrl ? (
          <>
            <div>
              <h3
                className={`text-lg font-medium ${
                  post._id === postId && 'text-gray-400'
                }`}
              >
                {post.title.length > 20
                  ? post.title.substring(0, 20 - 1) + '...'
                  : post.title}
              </h3>
              <p
                className={
                  post._id === postId ? 'text-gray-400' : 'text-gray-500'
                }
              >
                {post.body.length > 30
                  ? post.body.substring(0, 30 - 1) + '...'
                  : post.body}
              </p>
              <p className='text-gray-400 mt-2 text-xs lg:mb-4'>
                {new Date(post.createdAt)
                  .toLocaleDateString('en-NZ')
                  .replace(/\//gi, '. ')}
              </p>
              <div className='flex items-center'>
                <AiOutlineComment className='text-gray-400 mr-1 lg:text-gray-500 lg:w-6 lg:h-6' />
                <p className='text-sm text-gray-400 lg:text-gray-500 lg:text-base'>
                  {
                    comments.filter((comment: any) => comment.post === post._id)
                      .length
                  }
                </p>
              </div>
            </div>
            <img
              className='rounded-md w-24 h-24 object-cover'
              src={post.imageUrl}
              alt=''
            />
          </>
        ) : (
          <div>
            <h3
              className={`text-lg font-medium ${
                post._id === postId && 'text-gray-400'
              }`}
            >
              {post.title.length > 35
                ? post.title.substring(0, 35 - 1) + '...'
                : post.title}
            </h3>
            <p
              className={
                post._id === postId ? 'text-gray-400' : 'text-gray-500'
              }
            >
              {post.body.length > 45
                ? post.body.substring(0, 45 - 1) + '...'
                : post.body}
            </p>
            <p className='text-gray-400 mt-2 text-xs lg:mb-4'>
              {new Date(post.createdAt)
                .toLocaleDateString('en-NZ')
                .replace(/\//gi, '. ')}
            </p>
            <div className='flex items-center'>
              <AiOutlineComment className='text-gray-400 mr-1 lg:text-gray-500 lg:w-6 lg:h-6' />
              <p className='text-sm text-gray-400 lg:text-gray-500 lg:text-base'>
                {
                  comments.filter((comment: any) => comment.post === post._id)
                    .length
                }
              </p>
            </div>
          </div>
        )}
      </li>
    </Link>
  );
};

export default MorePostItem;
