import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PhotosContext = createContext();

const urlPhotos = "./photos.json";

const PhotosProvider = ({ children }) => {
    const [photos, setPhotos] = useState([]);
    const getPhotos = async () => {
        try {
            const response = await axios.get(urlPhotos);
            if (!response.status) {
                throw new Error("Data not found");
            }
            const { photos: photosData } = response.data;
            setPhotos(
                photosData.map((photo) => ({ ...photo, isFavorite: false }))
            );
            console.log(photosData);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getPhotos();
    }, []);

    return (
        <PhotosContext.Provider
            value={{
                photos,
                setPhotos,
            }}>
            {children}
        </PhotosContext.Provider>
    );
};

export default PhotosProvider;
