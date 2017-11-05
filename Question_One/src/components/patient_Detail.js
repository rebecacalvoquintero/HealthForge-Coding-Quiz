import React, {Component}from 'react';

const PatientDetail = ({patientData}) => {
  console.log(patientData.telecoms[0])
    console.log(telecoms)
  const telecoms = patientData.telecoms.map((telecom, index) => {
    return (
      <div key={index}>
      <div>{telecom.usage}</div>
      <div>{telecom.value}</div>
    </div>
    )
  })
  return (
    <div>
          <div className="center"> <h2> Last Name: {patientData.lastName} </h2></div>
          <div className="center"> <h2> First Name: {patientData.firstName} </h2> </div>
          <div className="center"> <h2> Date of Birth: {patientData.dateOfBirth} </h2> </div>
          <div className="center"> <h2> Gender: {patientData.gender} </h2> </div>
          <div className="center"> <h2> Title: {patientData.prefix} </h2></div>
          <div className="center"> <h2> Contact: {telecoms} </h2></div>
    </div>
  )
}

export default PatientDetail;
