import Modal from 'components/Modal/Modal';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const {
      image: { webformatURL, largeImageURL, tag },
    } = this.props;

    const { isModalOpen } = this.state;

    return (
      <li onClick={this.toggleModal}>
        <img src={webformatURL} alt={tag} />
        {isModalOpen && <Modal imgUrl={largeImageURL} tag={tag} />}
      </li>
    );
  }
}

export default ImageGalleryItem;
