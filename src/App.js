import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Impressum from './Impressum';
function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </Router>
      );
}

export default App;