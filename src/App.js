import Sidebar from './Sidebar';
import FullWidthElement from './FullWidthElement';

function App() {
  return (
    <div className="App">
      <div className='container'>


        {/* <Sidebar></Sidebar> */}
        <FullWidthElement color="#3490dc" image="https://wallpapercave.com/wp/bvJq0ra.jpg">
          <h1 className="text-white">Willkommen auf meiner Website</h1>
          <p className="text-white">Hier ist ein Beispieltext.</p>
        </FullWidthElement>

        <FullWidthElement color="#8490dc" image="https://example.com/image.jpg">
          <h1 className="text-white">Willkommen auf meiner Website</h1>
          <p className="text-white">Hier ist ein Beispieltext.</p>
        </FullWidthElement>



      </div>
    </div>
  );
}

export default App;
