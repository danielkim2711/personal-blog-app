const CommentItem = ({ comment }: { comment: any }) => {
  const { name, body, createdAt } = comment;

  return (
    <>
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
    </>
  );
};

export default CommentItem;
