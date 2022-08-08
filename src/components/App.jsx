import { Component } from 'react';
import { Circles } from 'react-loader-spinner';
import s from '../components/App.module.css';
import Searchbar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import { getFoto } from '../api/Api';

class App extends Component {
  state = {
    searchInput: '',
    isModalOpen: false,
    largeImage: {},
    isLoading: false,
    error: null,
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchInput !== this.state.searchInput) {
      this.getImage();
      this.setState({ page: 1 });
    }
  }

  updatePage = () => {
    const { page } = this.state;

    this.setState({ page: page + 1 });
    this.getImage();
  };

  handleImageClick = data => {
    this.setState({ largeImage: data });
    this.toogleModal();
  };

  toogleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  handleSubmit = searchInput => {
    this.setState({
      searchInput,
      page: 1,
      images: [],
      error: false,
    });
  };

  getImage = () => {
    const { searchInput, page } = this.state;
    if (searchInput !== '') {
      this.setState({ isLoading: true });
      getFoto(searchInput, page)
        .then(response =>
          this.setState(prev => ({
            images: [...prev.images, ...response.data.hits],
            // page: prev.page + 1,
          }))
        )
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  };

  togleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  onImageClick = data => {
    this.setState({ largeImage: data });
    this.togleModal();
  };

  render() {
    const { images, isLoading, largeImage, isModalOpen, page, error } =
      this.state;
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          page={page}
          images={images}
          onImageClick={this.onImageClick}
        />
        {isLoading && <Circles color="#00BFFF" height={60} width={60} />}
        {images.length !== 0 && <Button updatePage={this.updatePage} />}
        {error && 'НАЖАЛЬ ВИНИКЛА ПОМИЛКА'}
        {isModalOpen && (
          <Modal largeImage={largeImage} togleModal={this.togleModal} />
        )}
      </div>
    );
  }
}

export default App;
