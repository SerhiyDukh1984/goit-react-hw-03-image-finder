import { Component } from 'react';
import s from './ImageGalleryItem.module.css';

class ImageGallceryItem extends Component {
  render() {
    const { handleClickImage } = this.props;
    const { webformatURL, tags, largeImageURL } = this.props.dataEl;
    const { onHandleClickImage } = this.props;

    return (
      <li
        className={s.item}
        onClick={() => handleClickImage({ tags, largeImageURL })}
      >
        <img className={s.img} src={webformatURL} alt={tags} />
      </li>
    );
  }
}

export default ImageGallceryItem;
