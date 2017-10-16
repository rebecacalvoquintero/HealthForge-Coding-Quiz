import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import PatientsList from './components/patients_list';
import XhrRequest from './api_request';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patientsData: []
    };
    XhrRequest('https://api.interview.healthforge.io:443/api/patient?size=10', (patientsData) => {
      this.setState({patientsData})
    });

  }
  render() {
    return (
      <div>
        <SearchBar />
        <PatientsList patientsData={this.state.patientsData} />
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.querySelector('.container'));
