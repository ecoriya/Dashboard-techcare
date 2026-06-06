import "./App.css";
import { useEffect, useState } from "react";
import { getPatients } from "./services/api";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DiagnosisHistory from "./components/DiagnosisHistory";
import DiagnosticList from "./components/DiagnosticList";
import PatientProfile from "./components/PatientProfile";
import LabResults from "./components/LabResults";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPatients();

        console.log("Patients Data:", data);

        setPatients(data);

        const jessica = data.find(
          (p) => p.name === "Jessica Taylor"
        );

        console.log("Jessica Taylor Data:", jessica);

        setPatient(jessica);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, []);

  if (!patient) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="app">
      <Header />

      <div className="main-layout">
        <Sidebar patients={patients} />

        <div className="center-content">
          <DiagnosisHistory patient={patient} />
          <DiagnosticList patient={patient} />
        </div>

        <div className="right-content">
          <PatientProfile patient={patient} />
          <LabResults patient={patient} />
        </div>
      </div>
    </div>
  );
}

export default App;