import Display from './Display'
export default function List({items}) {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 lg:px-20">
      {Sales.map((data, index) => (
        <Display key={index} sale={items} />
      ))}
    </div>
  );
}

