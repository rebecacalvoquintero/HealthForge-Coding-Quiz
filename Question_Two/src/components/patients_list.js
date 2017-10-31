import React from 'react';
import PatientsListItem from './patients_list_item';

const PatientsList = (props) => {
  console.log('log:', props.patientsData)
  const patientItems = props.patientsData.map((patientData, index) => {
    return <PatientsListItem key={index} patientData={patientData} />
  });
  return (
    <table className="patientsTable center">
      <thead>
      <tr>
        <th className="center tableHeader f4 br5 pa3">Last Name</th>
        <th className="center  tableHeader f4 br5 pa3">First Name</th>
        <th className="center  tableHeader f4 br5 pa3">Date of Birth</th>
      </tr>
      </thead>
      <tbody>
     {patientItems}
      </tbody>
    </table>
  );
}

export default PatientsList;
