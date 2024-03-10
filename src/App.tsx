import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './pages/Dashboard';
import { Cart } from './pages/Cart';
import { CoursesProvider } from './context/CoursesProvider';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <CoursesProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      </CoursesProvider>
    </Router>
  );
}

export default App;
