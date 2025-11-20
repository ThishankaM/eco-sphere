import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SignInUp from './Components/SignIn&Up';
import Dashboard from './Components/Dashboard';

// Simple protected route component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<SignInUp />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          {/* Add more routes as needed */}
          <Route path="/about" element={<div>About Page - Coming Soon</div>} />
          <Route path="/features" element={<div>Features Page - Coming Soon</div>} />
          <Route path="/contact" element={<div>Contact Page - Coming Soon</div>} />
          <Route path="/profile" element={<div>Profile Page - Coming Soon</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;