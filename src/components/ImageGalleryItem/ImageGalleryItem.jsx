import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

class ImageGallceryItem extends Component {
  render() {
    const { handleImageClick } = this.props;
    const { webformatURL, tags, largeImageURL } = this.props.image;

    return (
      <p
        className={s.item}
        onClick={() => handleImageClick({ tags, largeImageURL })}
      >
        <img className={s.image} src={webformatURL} alt={tags} />
      </p>
    );
  }
}

ImageGallceryItem.propTypes = {
  handleImageClick: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGallceryItem;
