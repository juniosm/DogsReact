import React from "react";
import FeedPhotoItem from "./FeedPhotoItem";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import styles from "./FeedPhoto.module.css";

const FeedPhoto = ({ page, user, setModalPhoto, setInfinite }) => {
  const { loading, error, data, request } = useFetch();

  React.useEffect(() => {
    const total = 6;
    async function fetchPhotos() {
      const { url, options } = PHOTO_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map(photo => (
          <FeedPhotoItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhoto;
