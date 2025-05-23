import React from "react";
import css from "./ImageCard.module.css";
import { Image, Urls } from "../../types";

interface ImageCardProps {
  alt: string;
  urls: Urls;
  openModal: (urlObj: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ alt, urls, openModal }) => {
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
