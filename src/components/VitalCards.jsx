import { FaLungs, FaHeartbeat } from "react-icons/fa";
import { BsThermometerHalf } from "react-icons/bs";

function VitalCards({ latest }) {
  return (
    <div className="vital-cards">
      <div className="card respiratory">
       <FaLungs className="vital-icon" />

        <h4>Respiratory Rate</h4>
         

        <h2>{latest.respiratory_rate.value} bpm</h2>

        <p>{latest.respiratory_rate.levels}</p>
      </div>

      <div className="card temperature">
       <BsThermometerHalf className="vital-icon" />

        <h4>Temperature</h4>
          

        <h2>{latest.temperature.value}°F</h2>

        <p>{latest.temperature.levels}</p>
      </div>

      <div className="card heart">
      <FaHeartbeat className="vital-icon" />

        <h4>Heart Rate</h4>
          

        <h2>{latest.heart_rate.value} bpm</h2>

        <p>{latest.heart_rate.levels}</p>
      </div>
    </div>
  );
}

export default VitalCards;