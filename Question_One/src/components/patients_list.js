import React, {Component} from 'react';
import PatientsListItem from './patients_list_item';

class PatientsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortingColumn: "",
      direction: "",

    };

  }

  setSorting = (sortingColumn, direction) => () => {
    this.setState({sortingColumn, direction})
  }


  render() {

    let sortedPatients = this.props.patientsData.sort((a, b) => {
      const aVal = a[this.state.sortingColumn]
      const bVal = b[this.state.sortingColumn]
      if (aVal < bVal) {
        return -1
      } else if (bVal < aVal) {
        return + 1
      } else {
        return 0
      }
    })

    if (this.state.direction === "dsc") {
      sortedPatients = sortedPatients.reverse();
    }

    const pagePatients = sortedPatients
    .slice((this.props.currentPage * this.props.pageSize), (this.props.currentPage * this.props.pageSize) + 10)
    .map((patientData) => {
      return <PatientsListItem key={patientData.id} patientData={patientData} setFocusedPatient={this.props.setFocusedPatient}/>
    });

    return (
      <div>
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
            {pagePatients}
          </tbody>
        </table>

        <i className="arrow left fl pa2 ma4" onClick={this.props.decrementPage}></i>
        <i className="arrow right fr pa2 ma4" onClick={this.props.incrementPage}></i>
      </div>

    );

  }
}

export default PatientsList;

//
