import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import PatientsList from './components/patients_list';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patientsData: [],
      searchTerm: ""
    };

    axios.get('https://api.interview.healthforge.io:443/api/patient?size=1000')
      .then(response => {
        this.setState({
          patientsData: response.data.content
        })
      })
      .catch(error => console.log(error));
  }

  patientSearch = (searchTerm) => {
    this.setState({searchTerm})
    }


  render() {
    const filteredPatientsData = this.state.patientsData.filter(patient => {
      return (
        patient.firstName.toUpperCase().includes(this.state.searchTerm.toUpperCase()) ||
        patient.lastName.toUpperCase().includes(this.state.searchTerm.toUpperCase())
      );
    })

    return (
      <div>
        <SearchBar onSearchTermChange={searchTerm => this.patientSearch(searchTerm)}/>
        <PatientsList patientsData={filteredPatientsData}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.querySelector('.container'));
