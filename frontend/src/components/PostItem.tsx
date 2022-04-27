const PostItem = ({ post }: { post: any }) => {
  return (
    <li className='p-4 border-b-2 cursor-pointer md:px-14 md:py-6 lg:px-0 lg:pt-5 lg:mx-4'>
      <h3 className='text-lg font-bold'>
        {post.title.length > 40
          ? post.title.substring(0, 40 - 1) + '...'
          : post.title}
      </h3>
      {post.body.length > 45
        ? post.body.substring(0, 45 - 1) + '...'
        : post.body}
      <p className='text-gray-500'>{}</p>
      <div className='text-gray-400 mt-2 text-xs'>
        {new Date(post.createdAt)
          .toLocaleDateString('en-NZ')
          .replace(/\//gi, '. ')}
      </div>
    </li>
  );
};

export default PostItem;
