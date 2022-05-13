import { Link } from 'react-router-dom';

import { AiOutlineComment } from 'react-icons/ai';

const PostItem = ({ post, comments }: { post: any; comments: any }) => {
  const { _id, title, imageUrl, body, createdAt } = post;

  return (
    <Link to={`/posts/${post._id}`} className='lg:border-b-2 lg:mx-4'>
      <li className='flex p-4 justify-between items-center border-b-2 cursor-pointer md:px-14 md:py-6 lg:items-start lg:px-0 lg:pt-5 lg:mx-0 lg:flex-col lg:justify-start lg:border-b-0'>
        {imageUrl ? (
          <>
            <div className='lg:order-1 lg:mt-2.5'>
              <h3 className='text-lg font-medium'>
                {title.length > 40 ? title.substring(0, 40 - 1) + '...' : title}
              </h3>
              <p className='text-gray-500'>
                {body.length > 50 ? body.substring(0, 50 - 1) + '...' : body}
              </p>
              <p className='text-gray-400 mt-2 text-xs lg:mb-4'>
                {new Date(createdAt)
                  .toLocaleDateString('en-NZ')
                  .replace(/\//gi, '. ')}
              </p>
              <div className='flex items-center'>
                <AiOutlineComment className='text-gray-400 mr-1 lg:text-gray-500 lg:w-6 lg:h-6' />
                <p className='text-sm text-gray-400 lg:text-gray-500 lg:text-base'>
                  {
                    comments.filter((comment: any) => comment.post === _id)
                      .length
                  }
                </p>
              </div>
            </div>
            <img
              className='rounded-md w-24 h-24 object-cover lg:w-full lg:h-auto'
              src={imageUrl}
              alt=''
            />
          </>
        ) : (
          <div>
            <h3 className='text-lg font-medium'>
              {title.length > 40 ? title.substring(0, 40 - 1) + '...' : title}
            </h3>
            <p className='text-gray-500'>
              {body.length > 50 ? body.substring(0, 50 - 1) + '...' : body}
            </p>
            <p className='text-gray-400 mt-2 text-xs lg:mb-4'>
              {new Date(createdAt)
                .toLocaleDateString('en-NZ')
                .replace(/\//gi, '. ')}
            </p>
            <div className='flex items-center'>
              <AiOutlineComment className='text-gray-400 mr-1 lg:text-gray-500 lg:w-6 lg:h-6' />
              <p className='text-sm text-gray-400 lg:text-gray-500 lg:text-base'>
                {comments.filter((comment: any) => comment.post === _id).length}
              </p>
            </div>
          </div>
        )}
      </li>
    </Link>
  );
};

export default PostItem;
