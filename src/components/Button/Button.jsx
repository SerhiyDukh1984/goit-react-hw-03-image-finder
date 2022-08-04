import { Component } from 'react';
import s from './Button.module.css';

class Button extends Component {
  render() {
    const { handleClickImage, loadMore, getImage } = this.props;
    return (
      <>
        <button className={s.button} type="button" onClick={getImage}>
          Load more
        </button>
      </>
    );
  }
}

export default Button;
