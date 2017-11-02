import React from 'react';

const PatientsListItem = ({patientData}) => {
  return (

    <tr>
    <a href='/patient_Detail'><td className="center"> {patientData.lastName} </td></a>
    <td className="center"> {patientData.firstName} </td>
    <td className="center"> {patientData.dateOfBirth}</td>
    </tr>


  )
}

export default PatientsListItem;
