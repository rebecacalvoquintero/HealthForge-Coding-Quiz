import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }
  render() {
    return (
      <div>

      <input className="searchBar center db w-75 w-50-m w-33-l f3 pa2 ma4"
        // placeholder "start your search"
        value = {this.state.term}
        onChange={event => this.onInputChange(event.target.value)}/>
    </div>
    );
    onInputChange = (term) => {
      this.setState({term}),
      this.props.onSearchTermChange(term)
    }
  }
}

export default SearchBar;
