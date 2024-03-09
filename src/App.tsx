import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './pages/Dashboard';
import { Cart } from './pages/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
