import { Component } from 'react';
import api from 'components/services/api';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
  };

  handleSearch = ({ query }) => {
    this.setState({
      searchQuery: query.toLowerCase().trim(),
      page: 1,
      images: [],
    });
  };

  loadMoreImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, searchQuery } = this.state;

    console.log(prevState.searchQuery, searchQuery);
    console.log(prevState.page, page);

    if (prevState.page !== page || prevState.query !== searchQuery) {
      const response = await api(searchQuery, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...response],
      }));
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
