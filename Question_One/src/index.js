import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import PatientsList from './components/patients_list';
import PatientDetail from './components/patient_detail';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patientsData: [],
      searchTerm: "",
      currentPage: 0,
      pageSize: 10,
      focusedPatient: null
    };

    axios.get('https://api.interview.healthforge.io:443/api/patient?size=1000').then(response => {
      const patientData = response.data.content;
      patientData.forEach((p, i) => {
        p.id = i;
      })

      this.setState({patientsData: response.data.content})
    }).catch(error => console.log(error));
  }

  patientSearch = (searchTerm) => {
    this.setState({searchTerm, currentPage: 0})

  }

  incrementPage = (filteredPatientsData) => () => {

    if (((this.state.currentPage + 1) * this.state.pageSize) < filteredPatientsData.length) {
      this.setState({
        currentPage: this.state.currentPage + 1
      })
    }
  }

  decrementPage = () => {
    if (this.state.currentPage !== 0) {
      this.setState({
        currentPage: this.state.currentPage - 1
      })
    }

  }

  setFocusedPatient = (id) => () => {
    this.setState({focusedPatient: id})
  }

  render() {

    if(this.state.focusedPatient !== null) {

      const patientData = this.state.patientsData
      .find(patientData => patientData.id === this.state.focusedPatient)

      return (
        <div>
          <PatientDetail patientData={patientData}/>
        </div>
      )
    }

    const filteredPatientsData = this.state.patientsData.filter(patient => {
      return (patient.firstName.toUpperCase().includes(this.state.searchTerm.toUpperCase())
      || patient.lastName.toUpperCase().includes(this.state.searchTerm.toUpperCase()));
    })

    return (
      <div>
        <SearchBar onSearchTermChange={searchTerm => this.patientSearch(searchTerm)}/>
        <PatientsList patientsData={filteredPatientsData}
          currentPage={this.state.currentPage}
          incrementPage={this.incrementPage(filteredPatientsData)}
          decrementPage={this.decrementPage}
          pageSize={this.state.pageSize}
          setFocusedPatient={this.setFocusedPatient}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.querySelector('.container'));
