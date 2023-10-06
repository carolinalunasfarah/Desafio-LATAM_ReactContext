import { useContext } from "react";
import { PhotosContext } from "../components/context/PhotosContext";
import IconHeart from "../components/IconHeart";

const Favorites = () => {
    const { photos, setPhotos } = useContext(PhotosContext);

    const deleteFavorite = (id) => {
        const photosDeleted = photos.map((photo) => {
            if (photo.id === id) {
                return { ...photo, isFavorte: false };
            }
            return photo;
        });
        setPhotos(photosDeleted);
    };

    const photosFilter = photos.filter((filter) => filter.isFavorite === true);

    return (
        <div className="p-3 gallery grid-columns-4">
            {photosFilter.map((photo, p) => (
                <section
                    key={p}
                    onClick={() => deleteFavorite(photo.id)}
                    className="photoCard"
                    style={{ backgroundImage: `url(${photo.src.large})` }}>
                    <IconHeart filled={photo.isFavorte} />
                    <h1>Favorites pics</h1>
                </section>
            ))}
        </div>
    );
};
export default Favorites;
