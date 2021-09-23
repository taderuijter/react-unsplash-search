import React from 'react';

class ImageCard extends React.Component {

  // Initilize props, state and image reference
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  // Loads images and gets referation of image height
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  // Sets de span height for every image
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  // Render function for Component
  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
