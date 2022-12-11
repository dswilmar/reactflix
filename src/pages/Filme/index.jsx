import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import "./styles.css";

const Filme = () => {

    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "13f587e8928001aad5c1f93409a6cf01",
                    language: "pt-br"
                }
            }).then((response)=> {
                setFilme(response.data);
                setIsLoading(false);
            }).catch(() => {
                navigate("/", {
                    replace: true
                });
                return;
            });
        }

        loadFilme();

        return () => {
            console.log('Componente foi desmontado');
        }
    }, [id, navigate]);

    function salvarFilme() {
        const minhaLista = localStorage.getItem("@reactflix");
        let filmesSalvos = JSON.parse(minhaLista) || [];
        const hasFilme = filmesSalvos.some((filmeSalvo) => {
            return filmeSalvo.id === filme.id
        });

        if (hasFilme) {
            toast.warn("Filme já está na lista");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@reactflix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!");
    }

    if (isLoading) {
        return (
            <div className="filme-info">
                <h1>Carregando detalhes</h1>
            </div>
        )
    }

    return (
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <p>{filme.overview}</p>
            <strong>Avaliação: {filme.vote_average}/10</strong>

            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${filme.title} trailer`} target="_blank" rel="external">Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Filme;