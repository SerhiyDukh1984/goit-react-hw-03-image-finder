import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ images, handleImageClick, page }) {
  let itemRef = useRef(null);

  useEffect(() => {
    itemRef.current &&
      itemRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }, [images]);

  return (
    <ul className={s.list}>
      {images.map((image, idx) => (
        <li
          ref={(page - 2) * 12 + 1 === idx + 1 ? itemRef : null}
          key={image.id}
        >
          <ImageGalleryItem image={image} handleImageClick={handleImageClick} />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  handleImageClick: PropTypes.func.isRequired,
};
