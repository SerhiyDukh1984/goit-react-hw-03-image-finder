import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchInput: '',
  };

  handleChange = e => {
    const { value } = e.target;

    this.setState({ searchInput: value });
  };

  handleSubmit = e => {
    const { searchInput } = this.state;

    e.preventDefault();

    if (searchInput.trim() === '') {
      alert('what are you want?');
      return;
    }

    this.props.onSubmit(searchInput);
    this.setState({ searchInput: '' });
  };

  render() {
    const { searchInput } = this.state;
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.buttonLabel}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
            onChange={this.handleChange}
            value={searchInput}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
