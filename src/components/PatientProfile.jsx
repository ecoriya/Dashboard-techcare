import {
  FiCalendar,
  FiPhone,
} from "react-icons/fi";

import { FaFemale } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";

function PatientProfile({ patient }) {
  return (
    <div className="patient-profile">
      <img
        src={patient.profile_picture}
        alt={patient.name}
        className="profile-image"
      />

      <h2>{patient.name}</h2>

      <div className="profile-row">
        <div className="icon-circle">
          <FiCalendar />
        </div>

        <div>
          <span>Date Of Birth</span>
          <h4>{patient.date_of_birth}</h4>
        </div>
      </div>

      <div className="profile-row">
        <div className="icon-circle">
          <FaFemale />
        </div>

        <div>
          <span>Gender</span>
          <h4>{patient.gender}</h4>
        </div>
      </div>

      <div className="profile-row">
        <div className="icon-circle">
          <FiPhone />
        </div>

        <div>
          <span>Contact Info</span>
          <h4>{patient.phone_number}</h4>
        </div>
      </div>

      <div className="profile-row">
        <div className="icon-circle">
          <FiPhone />
        </div>

        <div>
          <span>Emergency Contacts</span>
          <h4>{patient.emergency_contact}</h4>
        </div>
      </div>

      <div className="profile-row">
        <div className="icon-circle">
          <BsShieldCheck />
        </div>

        <div>
          <span>Insurance Provider</span>
          <h4>{patient.insurance_type}</h4>
        </div>
      </div>

      <button className="profile-btn">
        Show All Information
      </button>
    </div>
  );
}

export default PatientProfile;