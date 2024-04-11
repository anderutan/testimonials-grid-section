export default function Card({ review, index, cardStyles }) {
  const { image, name, verified, title, comment, icon } = review;
  return (
    <div
      key={index}
      className={`${cardStyles} px-9 py-8 md:px-6 md:py-6 m-6 md:m-3 rounded-xl relative shadow-lg`}
    >
      <div className='flex flex-col gap-5 z-10 relative'>
        <div className='flex gap-5'>
          <div className='w-10'>
            <img
              src={image}
              alt=''
              className='rounded-full ring-2 ring-current'
            />
          </div>
          <div>
            <p className='font-bold mb-[-2px]'>{name}</p>
            <p className='text-sm font-medium opacity-50'>
              {verified ? 'Verified Graduate' : ''}
            </p>
          </div>
        </div>
        <div>
          <p className='text-2xl leading-7 font-semibold'>{title}</p>
        </div>
        <div>
          <p className='opacity-70'>"{comment}"</p>
        </div>
      </div>
      {icon && (
        <img src={icon} className='absolute right-10 top-0 z-0 opacity-80' />
      )}
    </div>
  );
}
