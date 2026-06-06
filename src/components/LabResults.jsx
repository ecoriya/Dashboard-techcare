import { FiDownload } from "react-icons/fi";

function LabResults({ patient }) {
  return (
    <div className="lab-results">
      <h2>Lab Results</h2>

      {patient.lab_results.map((result, index) => (
        <div
          key={index}
          className={
            result === "CT Scans"
              ? "lab-item active-lab"
              : "lab-item"
          }
        >
          <span>{result}</span>

          <FiDownload className="download-icon" />
        </div>
      ))}
    </div>
  );
}

export default LabResults;