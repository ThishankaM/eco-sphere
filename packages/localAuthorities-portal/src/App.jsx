import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/loginPage.jsx";
import Council from "./Pages/council.jsx";
import ViewProfile from "./Components/viewProfile.jsx";
import CenterDashboard from "./Pages/CenterDashboard.jsx";
import StoreDashboard from "./Pages/partnerStore.jsx";
import CollectorDashboard from "./Pages/garbageCollector.jsx";
import "./App.css";
import ProtectedRoute from "./routes/ProtectedRoute";
import modification from "./Pages/modification.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/modification" element={<modification />} />
      
       <Route
  path="/council"
  element={
    <ProtectedRoute allowedRoles={[3]}>
      <Council />
    </ProtectedRoute>
  }
/>

<Route
  path="/center-dashboard"
  element={
    <ProtectedRoute allowedRoles={[4]}>
      <CenterDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/store-dashboard"
  element={
    <ProtectedRoute allowedRoles={[5]}>
      <StoreDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/collector-dashboard"
  element={
    <ProtectedRoute allowedRoles={[6]}>
      <CollectorDashboard />
    </ProtectedRoute>
  }
/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
