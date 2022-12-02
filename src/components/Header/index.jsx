import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
    return (
        <header>
            <Link className="logo" to="/">Reactflix</Link>
            <Link className="favoritos" to="/favoritos">Meus Filmes</Link>
        </header>
    )
}

export default Header;