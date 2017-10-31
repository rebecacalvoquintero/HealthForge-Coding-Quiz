import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import PatientsList from './components/patients_list';
import PatientsListItem from './components/patients_list_item';
import XhrRequest from './api_request';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patientsData: []
    };

    this.patientSearch('');

  }

  // componentDidMount() {
  //   axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
  //     .then(res => {
  //       const posts = res.data.data.children.map(obj => obj.data);
  //       this.setState({ posts });
  //     });
  // }


  patientSearch = (term) => {
    XhrRequest('https://api.interview.healthforge.io:443/api/patient?size=1000', (patientsData) => {
      this.setState({
        patientsData: patientsData.content,

        })
    })
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange ={term => this.patientSearch(term)}/>
        <PatientsList patientsData={this.state.patientsData} />
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.querySelector('.container'));
