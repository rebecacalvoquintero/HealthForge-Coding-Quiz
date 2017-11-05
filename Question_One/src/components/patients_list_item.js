import React from 'react';

const PatientsListItem = ({patientData}) => {
  return (

    <tr>
  <td className="center"> {patientData.lastName} </td>
    <td className="center"> {patientData.firstName} </td>
    <td className="center"> {patientData.dateOfBirth}</td>
    </tr>


  )
}

export default PatientsListItem;
