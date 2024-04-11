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
        <Card review={data[0]} index={0} cardStyles={cardStyles[0]} />
        <Card review={data[1]} index={1} cardStyles={cardStyles[1]} />
        <Card review={data[2]} index={2} cardStyles={cardStyles[2]} />
        <Card review={data[3]} index={3} cardStyles={cardStyles[3]} />
        <Card review={data[4]} index={4} cardStyles={cardStyles[4]} />
      </div>
    </div>
  );
}

export default App;
