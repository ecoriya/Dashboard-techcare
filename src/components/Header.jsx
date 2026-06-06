import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiMessageSquare,
  FiDollarSign,
  FiSettings,
  FiMoreVertical,
} from "react-icons/fi";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h2>Tech.Care</h2>
      </div>

      <div className="menu">
        <span>
          <FiHome /> Overview
        </span>

        <span className="active-menu">
          <FiUsers /> Patients
        </span>

        <span>
          <FiCalendar /> Schedule
        </span>

        <span>
          <FiMessageSquare /> Message
        </span>

        <span>
          <FiDollarSign /> Transactions
        </span>
      </div>

      <div className="doctor-section">
          <img
    src="https://randomuser.me/api/portraits/men/32.jpg"
    alt="Dr. Joe Simmons"
    className="doctor-img"
  />


        <div>
           <h4>Dr. Jose Simmons</h4>
          <p>General Practitioner</p>
        </div>

        <FiSettings className="header-icon" />
        <FiMoreVertical className="header-icon" />
      </div>
    </div>
  );
}

export default Header;