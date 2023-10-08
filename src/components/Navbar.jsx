import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <section className="navbar">
                <Link to="/"> Home </Link>
                <span>🌳</span>
                <Link to="/favorites"> Favorites </Link>
            </section>
        </nav>
    );
};
export default Navbar;
