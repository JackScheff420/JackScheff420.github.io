import FullWidthElement from './FullWidthElement';

function App() {
  return (
    <div className="App">
      <div className='container p-4'>


        <FullWidthElement img={'https://preview.redd.it/ugjwrdylir0b1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=f1533aede2954ea9a1cae7480a021de604ace71a'}>
          <p>Hallo Welt</p>
          <button>Button</button>
        </FullWidthElement>


      </div>
    </div>
  );
}

export default App;
