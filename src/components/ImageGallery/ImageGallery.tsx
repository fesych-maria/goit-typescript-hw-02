import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image, Photo } from "../../types";

interface ImageGalleryProps {
  items: Photo[];
  openModal: (urlObj: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, openModal }) => {
  return (
    <ul className={css.list}>
      {items.map(({ description, id, urls }) => (
        <li key={id}>
          <ImageCard alt={description} urls={urls} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
