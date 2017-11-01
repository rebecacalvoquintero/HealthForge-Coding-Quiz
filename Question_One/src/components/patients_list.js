import React, {Component}from 'react';
import PatientsListItem from './patients_list_item';


class PatientsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortingColumn: "",
      direction: "",
      currentPage: 0,
      pageSize: 10

    };

  }

  setSorting = (sortingColumn, direction) => () =>{
    this.setState({sortingColumn, direction})
  }

  setPaging = (currentPage, pageSize) => () => {
    this.setState({currentPage, pageSize})
  }

  incrementPage = () => {
    
    this.setState({currentPage: this.state.currentPage + 1})
  }

  decrementPage = () => {
    if (this.state.currentPage !== 0) {
      this.setState({currentPage: this.state.currentPage - 1})
    }

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
      }).slice(
        (this.state.currentPage * this.state.pageSize), (this.state.currentPage * this.state.pageSize) + 9
      )
      console.log('currentPage', this.state.currentPage);
      console.log('pageSize', this.state.pageSize);

      if(this.state.direction === "dsc") {
        patientItems = patientItems.reverse();
      }

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
            {patientItems}
          </tbody>
        </table>


      <i className="arrow left fl pa2 ma4" onClick={this.decrementPage}></i>
      <i className="arrow right fr pa2 ma4" onClick={this.incrementPage}></i>
      </div>


      );


  }
}




export default PatientsList;

//
