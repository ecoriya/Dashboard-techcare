function DiagnosticList({ patient }) {

  console.log(patient.diagnostic_list);
  console.log(patient.diagnostic_list.length);

  return (
    <div className="diagnostic-list">
      <h2>Diagnostic List</h2>

      <div className="diagnostic-table-container">
        <table className="diagnostic-table">
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {patient.diagnostic_list.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DiagnosticList;