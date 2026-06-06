export const patientProfile = {
  name: "Jessica Taylor",
  gender: "Female",
  age: 28,
  dob: "14 August 1996",
  phone: "(415) 555-1234",
  emergencyContact: "(415) 555-5678",
  insuranceProvider: "Sunrise Health Assurance",
  image: "https://randomuser.me/api/portraits/women/4.jpg",
};

export const vitals = {
  respiratoryRate: {
    value: 20,
    unit: "bpm",
    status: "Normal",
  },

  temperature: {
    value: 98.6,
    unit: "°F",
    status: "Normal",
  },

  heartRate: {
    value: 78,
    unit: "bpm",
    status: "Lower than Average",
  },
};

export const diagnosticList = [
  {
    problem: "Hypertension",
    description: "Chronic high blood pressure",
    status: "Under Observation",
  },
  {
    problem: "Type 2 Diabetes",
    description: "Insulin resistance and elevated blood sugar",
    status: "Cured",
  },
  {
    problem: "Asthma",
    description: "Recurrent episodes of bronchial constriction",
    status: "Inactive",
  },
  {
    problem: "Migraine",
    description: "Recurring severe headaches",
    status: "Managed",
  },
];

export const labResults = [
  "Blood Tests",
  "CT Scans",
  "Radiology Reports",
  "X-Rays",
  "Urine Test",
];