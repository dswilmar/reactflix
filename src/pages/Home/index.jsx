import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import './styles.css';

const Home = () => {    

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "13f587e8928001aad5c1f93409a6cf01",
                    language: "pt-br"
                }
            });

            setFilmes(response.data.results);
        }

        loadFilmes();
    }, []);

    return (
        <div className="container">
            <div className="lista-filmes">
                { filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                }) }
            </div>
        </div>
    )
}

export default Home;