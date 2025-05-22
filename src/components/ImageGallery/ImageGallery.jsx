import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ items, openModal }) => {
  return (
    <ul className={css.list}>
      {items.map(({ alt_description, id, urls }) => (
        <li key={id}>
          <ImageCard alt={alt_description} urls={urls} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
