import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    return (
      <div>
      {
        this.props.item.map((item, index) => {
          let {title, imageLinks, infoLink} = item.volumeInfo;
          return(
            <a
              key={index}
              className="book"
              href={infoLink}
              target="_blank"
            >
              <img
                src={imageLinks !== undefined ? imageLinks.thumbnail: alternate}
                alt="book image"
                className="book-image"
              />
            </div>
            <div className="book-text">
              {title}
            </div>
          )
        })
      }
      </div>
    )
  }
}

export default Gallery;
