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
  search() {
    console.log('search');
  }

  render() {
    return (
      <div>
        <h2>Book Explorer!</h2>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for a book"
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
