import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import RegisterCollector from "../Components/registerCollector.jsx";
import './council.css';
import IllegalDumpingReport from "../Components/illegalDump&pickupRequest.jsx";
import SchedulePickup from "../Components/schedulePickup.jsx";
import EvaluationInfo from "../Components/evaluation.jsx";
import NavBarDisplay from "../Components/navbar.jsx";
import Search from "../Components/searchCollector.jsx";

function CouncilDashboard() {

 const location = useLocation();

 
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTarget === "top" && topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.state?.scrollTarget === "bottom" && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  return (
    
    <div className="dashboard-container">

       
        <div className="navbarD">
          <NavBarDisplay/>
          </div>
      
         <table className="councilTable">
      <tbody>
     
      <tr>
        <td className="eInfo"><EvaluationInfo showGraph="graph1"/></td>
         <td className="eInfo1"><EvaluationInfo showGraph="graph2"/></td>
        
      </tr>
      <tr className="row2">
        <td className="illegalDump"> <IllegalDumpingReport/></td>
        
      </tr>
      <tr className="row3">
       
       
         <td className="schedule"><SchedulePickup/></td>
          <td className="searchCollectors"><Search/></td>
        <td className="registerCollector">  <RegisterCollector /></td>
      </tr>
      </tbody>
    </table>
    
    </div>
  );
}

export default CouncilDashboard;
