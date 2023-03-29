import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Addquote from './components/Addquote';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (

    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/addquote" element={<Addquote />} exact />
          <Route path="calculator" element={<Calculator />} exact />

        </Routes>
      </div>

    </Router>
  );
}

export default App;
