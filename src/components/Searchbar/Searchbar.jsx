import { Component } from 'react';
import s from './Searchbar.module.css';

const INITIALSTATE = { query: '' };

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInput = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState(INITIALSTATE);

    e.target.reset();
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
          />
          <button type="submit" className={s.button}>
            <span className={s.buttonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
