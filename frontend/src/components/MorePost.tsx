import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RootState } from '../app/store';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getAllComments } from '../features/comments/commentSlice';

import { RiArrowRightSLine } from 'react-icons/ri';
import { AiOutlineComment } from 'react-icons/ai';

const MorePost = ({
  posts,
  post,
  postId,
}: {
  posts: any;
  post: any;
  postId: string | undefined;
}) => {
  const { category } = post;

  const { comments } = useAppSelector((state: RootState) => state.comments);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch]);

  return (
    <>
      <Link
        to={
          category === 'Misc.'
            ? '/categories/miscellaneous'
            : `/categories/${category?.toLowerCase()}`
        }
      >
        <div className='pb-3 border-b-2 flex justify-between items-center'>
          <p className='font-semibold'>
            More <span className='text-green-500'>{category}</span> Posts
          </p>
          <RiArrowRightSLine className='w-6 h-6' />
        </div>
      </Link>
      {posts.length > 0 &&
      posts.some((post: any) => post.category === category) ? (
        <ul>
          {posts.map(
            (post: any) =>
              post.category === category && (
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
                            {post.title.length > 40
                              ? post.title.substring(0, 40 - 1) + '...'
                              : post.title}
                          </h3>
                          <p
                            className={
                              post._id === postId
                                ? 'text-gray-400'
                                : 'text-gray-500'
                            }
                          >
                            {post.body.length > 50
                              ? post.body.substring(0, 50 - 1) + '...'
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
                                comments.filter(
                                  (comment: any) => comment.post === post._id
                                ).length
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
                          {post.title.length > 40
                            ? post.title.substring(0, 40 - 1) + '...'
                            : post.title}
                        </h3>
                        <p
                          className={
                            post._id === postId
                              ? 'text-gray-400'
                              : 'text-gray-500'
                          }
                        >
                          {post.body.length > 50
                            ? post.body.substring(0, 50 - 1) + '...'
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
                              comments.filter(
                                (comment: any) => comment.post === post._id
                              ).length
                            }
                          </p>
                        </div>
                      </div>
                    )}
                  </li>
                </Link>
              )
          )}
        </ul>
      ) : (
        <p className='text-2xl p-20 text-center text-gray-400 2xl:text-3xl'>
          No Post Yet
        </p>
      )}
    </>
  );
};

export default MorePost;
