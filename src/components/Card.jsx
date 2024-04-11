import data from '../Data';

export default function Card() {
  const cardStyles = [
    'bg-violet-700 text-white',
    'bg-slate-600 text-white',
    'bg-white text-slate-600',
    'bg-gray-800 text-white',
    'bg-white text-gray-800',
  ];
  return data.map((review, index) => (
    <div
      key={index}
      className={`${
        cardStyles[index % cardStyles.length]
      } px-9 py-8 m-6 rounded-xl relative`}
    >
      <div className='flex flex-col gap-5 z-10 relative'>
        <div className='flex gap-5'>
          <div className='w-10'>
            <img
              src={review.image}
              alt=''
              className='rounded-full ring-2 ring-current'
            />
          </div>
          <div>
            <p className='font-bold mb-[-2px]'>{review.name}</p>
            <p className='text-sm font-medium opacity-50'>
              {review.verified ? 'Verified Graduate' : ''}
            </p>
          </div>
        </div>
        <div>
          <p className='text-2xl leading-7 font-semibold'>{review.title}</p>
        </div>
        <div>
          <p className='opacity-70 pb-3'>"{review.comment}"</p>
        </div>
      </div>
      {review.icon && (
        <img
          src={review.icon}
          className='absolute right-10 top-0 z-0 opacity-80'
        />
      )}
    </div>
  ));
}
