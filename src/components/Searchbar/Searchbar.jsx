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
    e.preventDefault();
    if (this.state.searchInput.trim() === '') {
      alert('what are you want?');
      return;
    }
    this.props.onSubmit(this.state.searchInput);
    this.setState({ searchInput: '' });
  };

  render() {
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
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
