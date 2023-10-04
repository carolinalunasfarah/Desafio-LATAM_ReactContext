import { useContext } from "react";
import { PhotosContext } from "../components/context/PhotosContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
    const { photos, setPhotos } = useContext(PhotosContext);

    const addFavorite = (id) => {
        const photosNew = photos.map((photo) => {
            if (photo.id === id) {
                return { ...photo, isFavorite: true };
            }
            return photo;
        });
        setPhotos(photosNew);
    };

    return (
        <div className="gallery grid-columns-5 p-3">
            {photos.map((photo, p) => (
                <section
                    key={p}
                    onClick={() => addFavorite(photo.id)}
                    className="photoCard"
                    style={{ backgroundImage: `url(${photo.src.large})` }}>
                    <IconHeart filled={photo.isFavorite} />
                    <article>
                        <p>{photo.alt}</p>
                    </article>
                </section>
            ))}
        </div>
    );
};

export default Gallery;
