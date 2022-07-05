import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import api from 'components/services/api';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    searchQuery: null,
    images: [],
    page: 1,
    status: 'idle',
  };

  async componentDidUpdate(_, prevState) {
    const { page, searchQuery, images } = this.state;

    // if (page === 1 && prevState.searchQuery === this.state.searchQuery) {
    //   return toast.info('Try "load more" button');
    // }

    if (prevState.page !== page || prevState.searchQuery !== searchQuery) {
      try {
        if (searchQuery === '') {
          return toast.info('Please type your search query');
        }

        this.setState({ status: 'pending' });
        const response = await api(searchQuery, page);
        console.log(response);
        if (response.length === 0) {
          this.setState({ status: 'idle' });

          return images.length > 0
            ? toast.info('No more images found')
            : toast.error('No images found');
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...response],
          status: 'success',
        }));
      } catch (error) {
        this.setState({ status: 'error' });

        toast.error(error.message);
      }
    }
  }

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

  render() {
    const { images, status } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} />
        {status === 'success' && <Button onClick={this.loadMoreImages} />}
        {status === 'error' && <h2>Something went wrong, try again</h2>}
        <ToastContainer />
        {status === 'pending' && <Loader />}
      </div>
    );
  }
}
