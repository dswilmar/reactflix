import { Link } from "react-router-dom";
import "./styles.css";

const Erro = () => {
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <Link to="/">Ir para a Home</Link>
        </div>
    )
}

export default Erro;