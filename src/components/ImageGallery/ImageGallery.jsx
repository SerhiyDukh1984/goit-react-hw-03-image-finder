import axios from 'axios';
import { Component } from 'react';
import s from './ImageGallery.module.css';
import getFoto from 'components/api/Api';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    fotos: {},
    hits: [],
    totalHits: 0,
  };

  // componentDidMount = () => {
  //   const parsedHits = JSON.parse(localStorage.getItem('hits'));
  //   const parsedFotos = JSON.parse(localStorage.getItem('fotos'));
  //   const parsedTotalHits = JSON.parse(localStorage.getItem('totalHits'));

  //   if (parsedHits !== null) {
  //     this.setState({
  //       hits: [...parsedHits],
  //       fotos: { parsedFotos },
  //       totalHits: parsedTotalHits,
  //     });
  //   }
  // };

  componentDidUpdate(prevProps, prevState) {
    const { searchInput } = this.props;

    const BASE_URL = 'https://pixabay.com/api/';

    const options = new URLSearchParams({
      key: '28585306-e4853ffc00a22ab5f0bd1fbb4',
      q: searchInput,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: 1,
      per_page: '12',
    });

    if (prevProps.searchInput !== this.props.searchInput) {
      fetch(` ${BASE_URL}?${options}`)
        .then(response => response.json())
        .then(data =>
          this.setState({
            fotos: data,
            hits: data.hits,
            totalHits: data.totalHits,
          })
        );
    }
    // localStorage.setItem('hits', JSON.stringify([...this.state.hits]));
    // localStorage.setItem('fotos', JSON.stringify(this.state.fotos));
    // localStorage.setItem('totalHits', JSON.stringify(this.state.totalHits));
  }

  render() {
    const { hits } = this.state;

    return (
      <ul className={s.list}>
        {hits.map(hit => (
          <ImageGalleryItem key={hit.id} dataEl={hit} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
