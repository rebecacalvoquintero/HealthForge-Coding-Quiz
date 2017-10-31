import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import PatientsList from './components/patients_list';
import PatientsListItem from './components/patients_list_item';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patientsData: [],
      searchTerm: ""
    };

    this.patientSearch('');

  }

  patientSearch = (searchTerm) => {
    console.log('searchTerm: ', searchTerm)

    axios.get('https://api.interview.healthforge.io:443/api/patient?size=1000')
      .then(response => {
        this.setState({
          patientsData: response.data.content.filter(patient => {
            return (
              ((patient.firstName).toUpperCase()).includes(searchTerm.toUpperCase()) ||
              ((patient.lastName).toUpperCase()).includes(searchTerm.toUpperCase())
            );
          })
        })
      })
      .catch(error => console.log(error));
    }


  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={searchTerm => this.patientSearch(searchTerm)}/>
        <PatientsList patientsData={this.state.patientsData}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.querySelector('.container'));
