import { Component } from 'react';
import api from 'components/services/api';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';

export class App extends Component {
  state = {
    searchQuery: null,
    images: [],
    page: 1,
  };

  handleSearch = ({ query }) => {
    this.setState({ searchQuery: query.toLowerCase().trim() });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, searchQuery } = this.state;

    console.log(prevState.searchQuery, searchQuery);

    if (prevState.page !== page || prevState.query !== searchQuery) {
      const images = await api(searchQuery, page).then(response =>
        this.setState(prevState => ({
          images: [...prevState.images, ...response],
        }))
      );
    }
  }

  render() {
    const { images } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        {images.length > 0 && <ImageGallery images={images} />}
        <Button onClick={this.loadMoreImages} />
      </div>
    );
  }
}
