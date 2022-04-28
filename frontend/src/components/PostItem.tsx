import { Link } from 'react-router-dom';

const PostItem = ({ post }: { post: any }) => {
  const { title, imageUrl, body, createdAt } = post;

  return (
    <Link to={`/${post._id}`} className='lg:border-b-2 lg:mx-4'>
      <li className='flex p-4 justify-between border-b-2 cursor-pointer md:px-14 md:py-6 lg:px-0 lg:pt-5 lg:mx-0 lg:flex-col lg:justify-start lg:border-b-0'>
        {imageUrl ? (
          <>
            <div className='mr-2 lg:order-1 lg:mt-2.5'>
              <h3 className='text-lg font-medium'>
                {title.length > 40 ? title.substring(0, 40 - 1) + '...' : title}
              </h3>
              <p className='text-gray-500'>
                {body.length > 50 ? body.substring(0, 50 - 1) + '...' : body}
              </p>
              <div className='text-gray-400 mt-2 text-xs'>
                {new Date(createdAt)
                  .toLocaleDateString('en-NZ')
                  .replace(/\//gi, '. ')}
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
            <div className='text-gray-400 mt-2 text-xs'>
              {new Date(createdAt)
                .toLocaleDateString('en-NZ')
                .replace(/\//gi, '. ')}
            </div>
          </div>
        )}
      </li>
    </Link>
  );
};

export default PostItem;
