import Modal from 'components/Modal/Modal';
import { Component } from 'react';

import s from './ImageGalleryItem.module.css';

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
      <li className={s.item} onClick={this.toggleModal}>
        <img src={webformatURL} alt={tag} width="300px" height="200px" />
        {isModalOpen && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tag} width="1280px" />
          </Modal>
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
