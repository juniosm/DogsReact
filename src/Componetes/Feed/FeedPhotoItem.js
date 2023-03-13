import React from "react";
import Image from "../Helper/Image";
import styles from "./FeedPhotoItem.module.css";

const FeedPhotoItem = ({ photo, setModalPhoto }) => {
  function handleclick() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleclick}>
      <Image src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotoItem;
