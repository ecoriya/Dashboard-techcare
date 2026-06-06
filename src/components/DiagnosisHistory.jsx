import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { FiChevronUp } from "react-icons/fi";
import VitalCards from "./VitalCards";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function DiagnosisHistory({ patient }) {
  const history = patient.diagnosis_history.slice(-6);

  const labels = history.map((item) =>
    item.month.substring(0, 3)
  );

  const systolicData = history.map(
    (item) => item.blood_pressure.systolic.value
  );

  const diastolicData = history.map(
    (item) => item.blood_pressure.diastolic.value
  );

  const latest = history[history.length - 1];

  const data = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 6,
        pointBackgroundColor: "#E66FD2",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "#7E57C2",
        backgroundColor: "#7E57C2",
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 6,
        pointBackgroundColor: "#7E57C2",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="diagnosis-history">

      <div className="diagnosis-header">
        <h2>Diagnosis History</h2>

      </div>

      <div className="chart-section">

        <div className="chart-container">
           <div className="month-filter">
      Last 6 Months <FiChevronUp />
    </div>

          <Line data={data} options={options} />
        </div>

        <div className="bp-summary">

          <div className="bp-item">
            <div className="pink-dot"></div>

            <div>
              <h4>Systolic</h4>
              <h2>{latest.blood_pressure.systolic.value}</h2>
              <p>{latest.blood_pressure.systolic.levels}</p>
            </div>
          </div>

          <hr />

          <div className="bp-item">
            <div className="purple-dot"></div>

            <div>
              <h4>Diastolic</h4>
              <h2>{latest.blood_pressure.diastolic.value}</h2>
              <p>{latest.blood_pressure.diastolic.levels}</p>
            </div>
          </div>

        </div>

      </div>

      <VitalCards latest={latest} />

    </div>
  );
}

export default DiagnosisHistory;