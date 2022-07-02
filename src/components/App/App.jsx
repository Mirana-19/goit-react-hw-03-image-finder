import { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';

export class App extends Component {
  state = {
    query: '',
    images: [],
  };

  handleSubmit = ({ query }) => {
    this.setState({ query });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
