import css from "./ImageCard.module.css";

const ImageCard = ({ alt, urls, openModal }) => {
  return (
    <div className={css.container}>
      <img
        src={urls.small}
        alt={alt}
        onClick={() => openModal({ url: urls.regular, alt: alt })}
      />
    </div>
  );
};

export default ImageCard;
