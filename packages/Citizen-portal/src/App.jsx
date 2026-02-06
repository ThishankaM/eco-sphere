import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInUp from './Components/SignIn&Up';
import Dashboard from './Components/Dashboard';
import BottomTab from './Navigation/Routes';
import TinyChat from "./Components/TinyChat";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './App.css';

function App() {
  return (
    
     <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignInUp />} />
          <Route path="/dashboard" element={<><TinyChat /><BottomTab /></>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;