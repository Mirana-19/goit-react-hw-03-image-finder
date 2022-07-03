function ImageGalleryItem({ image: { webformatURL, largeImageURL, tag } }) {
  return (
    <li>
      <img src={webformatURL} alt={tag} />
    </li>
  );
}

export default ImageGalleryItem;
