import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

class Button extends Component {
  render() {
    const { updatePage } = this.props;
    return (
      <>
        <button className={s.button} type="button" onClick={updatePage}>
          Load more
        </button>
      </>
    );
  }
}

Button.propTypes = {
  updatePage: PropTypes.func.isRequired,
};

export default Button;
