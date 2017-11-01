import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }
  render() {
    return (
      <div>

      <input className="searchBar center db w-75 w-50-m w-33-l f3 pa2 ma4"
        placeholder = "start your search"
        value = {this.state.searchTerm}
        onChange={event => this.onInputChange(event.target.value)}
      />
    </div>
    );
  }

  onInputChange = (searchTerm) => {
    this.setState({searchTerm}),
    this.props.onSearchTermChange(searchTerm)
  }
}

export default SearchBar;
