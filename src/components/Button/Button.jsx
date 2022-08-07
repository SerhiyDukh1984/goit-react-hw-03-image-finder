import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

class Button extends Component {
  render() {
    const { getImage } = this.props;
    return (
      <>
        <button className={s.button} type="button" onClick={getImage}>
          Load more
        </button>
      </>
    );
  }
}

Button.propTypes = {
  getImage: PropTypes.func.isRequired,
};
export default Button;
