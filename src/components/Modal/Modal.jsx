import { Component } from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';

    window.addEventListener('keydown', this.onBtnClickEscape);
  }

  componentWillUnmount() {
    const body = document.querySelector('body');
    body.style.overflow = 'auto';

    window.removeEventListener('keydown', this.onBtnClickEscape);
  }

  onBackdropClick = e => {
    e.target === e.currentTarget && this.props.toogleModal();
  };

  onBtnClickEscape = e => {
    if (e.code === 'Escape') {
      this.props.toogleModal();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.largeImage;
    return (
      <div className={s.overlay} onClick={this.onBackdropClick}>
        <div className={s.modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  toogleModal: PropTypes.func.isRequired,
};

export default Modal;
