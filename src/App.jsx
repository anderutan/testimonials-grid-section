import Card from './components/Card';
import data from './Data';

function App() {
  const cardStyles = [
    'bg-violet-700 text-white col-start-1 col-end-3 row-start-1 row-end-2',
    'bg-slate-600 text-white col-start-3 col-end-4 row-start-1 row-end-2',
    'bg-white text-slate-600 col-start-1 col-end-2 row-start-2 row-end-3',
    'bg-gray-800 text-white col-start-2 col-end-4 row-start-2 row-end-3',
    'bg-white text-gray-800 col-start-4 col-end-5 row-start-1 row-end-3',
  ];
  return (
    <div className='w-full h-full md:h-screen bg-slate-300 flex items-center justify-center'>
      <div className='max-w-7xl md:grid md:grid-cols-4 md:grid-rows-2'>
        {data.map((review, index) => (
          <Card
            review={review}
            index={index}
            cardStyles={cardStyles[index % cardStyles.length]}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
