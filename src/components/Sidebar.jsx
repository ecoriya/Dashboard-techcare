import { FiSearch, FiMoreHorizontal } from "react-icons/fi";

function Sidebar({ patients = [] }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Patients</h2>
        <FiSearch className="search-icon" />
      </div>

      <div className="patients-list">
        {patients.map((patient, index) => (
          <div
            key={index}
            className={
              patient.name === "Jessica Taylor"
                ? "patient active"
                : "patient"
            }
          >
            <img
              src={patient.profile_picture}
              alt={patient.name}
              className="patient-img"
            />

            <div className="patient-content">
              <div>
                <h4>{patient.name}</h4>
                <p>
                  {patient.gender}, {patient.age}
                </p>
              </div>

              <FiMoreHorizontal className="menu-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;