import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }
    search() {
        this.props.onSearch(this.state.term)
    }

    handleTermChange(t) {
        let searchTerm = t.target.value;
        this.setState({term: searchTerm});
    }

    render() {
        (
            <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
            <a>SEARCH</a>
          </div> 
        )
    }
}