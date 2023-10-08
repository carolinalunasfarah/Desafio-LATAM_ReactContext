import notFound from "../assets/icons/notFound.svg";

const NotFound = () => {
    return (
        <section className="notFound">
            <h3>
                💔 The page you are looking for doesn't exist 💔
            </h3>
            <img className="notFoundImg" src={notFound} alt="Sad fake draw" />
        </section>
    );
};
export default NotFound;
