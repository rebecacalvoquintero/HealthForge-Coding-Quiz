import React, {Component}from 'react';
import PatientsListItem from './patients_list_item';


const PatientDetail = ({patientData}) => {
  <tr>
        <td className="center"> {patientData.lastName} </td>
        <td className="center"> {patientData.firstName} </td>
        <td className="center"> {patientData.dateOfBirth}</td>
        <td className="center"> {patientData.gender}</td>
        <td className="center"> {patientData.title}</td>
        <td className="center"> {patientData.telecoms}</td>
  </tr>

}
