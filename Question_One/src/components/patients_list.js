import React, {Component}from 'react';
import PatientsListItem from './patients_list_item';


class PatientsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortingColumn: "",
      direction: ""
    };

  }

  setSorting = (sortingColumn, direction) => () =>{
    this.setState({sortingColumn, direction})
  }

  render () {
      let patientItems = this.props.patientsData.sort((a,b) => {
        const aVal = a[this.state.sortingColumn]
        const bVal = b[this.state.sortingColumn]
        if(aVal < bVal) {
          return -1
        } else if(bVal < aVal) {
          return + 1
        } else {
          return 0
        }
      }).map((patientData, index) => {
        return <PatientsListItem key={index} patientData={patientData}/>
      });
      if(this.state.direction === "dsc") {
        patientItems = patientItems.reverse();
      }
      return (
        <table className="patientsTable center">
          <thead>
            <tr>

              <th className="center tableHeader f4 br5 pa3">Last Name
                <span className="pa1">
                  <div className="arrow-up fr" onClick={this.setSorting("lastName", "asc")}></div>
                  <div className="arrow-down fr" onClick={this.setSorting("lastName", "dsc")}></div>
                </span>
              </th>

              <th className="center  tableHeader f4 br5 pa3">First Name
                <span className="pa1">
                  <div className="arrow-up fr" onClick={this.setSorting("firstName", "asc")}></div>
                  <div className="arrow-down fr" onClick={this.setSorting("firstName", "dsc")}></div>
                </span>
              </th>

              <th className="center  tableHeader f4 br5 pa3">Date of Birth
                <span className="pa1">
                  <div className="arrow-up fr" onClick={this.setSorting("dateOfBirth", "asc")}></div>
                  <div className="arrow-down fr" onClick={this.setSorting("dateOfBirth", "dsc")}></div>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {patientItems}
          </tbody>
        </table>
      );
    // }

  }
}




export default PatientsList;

//
