import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

// class Global extends Component {
//   render() {
//     return (
//       <div>The Global App Component</div>
//     )
//   }
// }

class Global extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  search() {
    const BASE_URL = `http://www.googleapis.com/books/v1/volumes?q=`;
    // console.log('search', this.state.query);
    fetch(`${BASE_URL}${this.state.query}`, { method: 'GET'})
      .then(response => response.json())
      .then(json => console.log(json));
  }

  render() {
    return (
      <div className="Global">
        <h2>Book Explorer!</h2>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for a book"
              onChange={event => this.setState({query: event.target.value})}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search()
                }
              }}
            />
            <InputGroup.Addon>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </div>
    )
  }
}

export default Global;
