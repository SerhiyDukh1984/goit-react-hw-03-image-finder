import { Component } from 'react';
import { Circles } from 'react-loader-spinner';
import s from '../components/App.module.css';
import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import getFoto from './api/Api';

//    https://pixabay.com/api/?q=cat&page=1&key=28585306-e4853ffc00a22ab5f0bd1fbb4&image_type=photo&orientation=horizontal&per_page=12

class App extends Component {
  state = {
    page: 1,
    searchInput: '',
    isModalOpen: false,
    largeImage: {},
    isLoading: false,
    isError: false,
    images: [],
  };

  handleImageClick = data => {
    this.setState({ largeImage: data });
    this.toogleModal();
  };

  loadMore = images => {
    this.setState({ images });
  };

  toogleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  handleFormSubmit = searchInput => {
    this.setState({ searchInput });
  };

  getImage = () => {
    const { searchInput, page } = this.state;
    // this.setState({ isLoading: true });
    getFoto(searchInput, page)
      .then(response => response.json())
      .then(data =>
        this.setState(prev => ({
          images: [...prev.images, ...data.hits],
          page: prev.page + 1,
        }))
      )
      .catch(err => this.setState({ isError: true }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { searchInput, isLoading, largeImage, isModalOpen } = this.state;
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchInput={searchInput} />
        <Button getImage={this.getImage} loadMore={this.loadMore} />
        {/* {isModalOpen && (
          <Modal largeImage={largeImage} toogleModal={this.toogleModal} />
        )} */}
        {/* {isLoading && <Circles color="#00BFFF" height={80} width={80} />} */}
      </div>
    );
  }
}

export default App;
