import React from 'react';

const PatientsList = (props) => {
  return (
    <table className="patientsTable">
      <thead>
      <tr>
        <th className="f3">Last Name</th>
        <th className="f3">First Name</th>
        <th className="f3">Date of Birth</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{props.patientsData.length}</td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>
  );
}

export default PatientsList;
