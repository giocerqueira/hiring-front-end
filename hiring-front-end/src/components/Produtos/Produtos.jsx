import Cart from "../../assets/cart.svg"
import * as S from "./Style.jsx"
import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

export default function ProductsArea({pesquisa, setPaginaInformacao, carrinho, setCarrinho}) {
    const [produtos, setProdutos] = useState([])
    const [produtosFiltrados, setProdutosFiltrados] = useState([])
    const pegarDados = async () => {
        try {
            const Dados = await axios.get("https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos");
            setProdutos(Dados.data)
            setProdutosFiltrados(Dados.data)
            setErrorDisplay("none")
        } catch {
            setErrorDisplay("block")
        }
    }
    useEffect(() => {
        pegarDados()
    }, [])

    const pesquisar = () => {
        const listaFiltrada = produtos.filter(f => f.name.toLowerCase().includes(pesquisa.toLowerCase()))

        setErrorDisplay("none")
        if(pesquisa !== '' && listaFiltrada.length >= 1) {
            setProdutosFiltrados(listaFiltrada)
        } 
        else if(pesquisa == '') {
            setProdutosFiltrados(produtos)
        }
        else {
            setProdutosFiltrados([])
            setErrorDisplay("block")
        }
    }

    const [errorDisplay, setErrorDisplay] = useState("none")
    const [clicked, setClicked] = useState(false);
    useEffect(() => {

        document.querySelector("#botao-pesquisa").addEventListener("click", () => {
            pesquisar()
        })

        const handleKeyUp = (e) => {
            if (e.key === 'Enter' && !clicked) {
                pesquisar();
                setClicked(true);
            } 
            setTimeout(() => {
                setClicked(false)
            }, 3000);
        }; 
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [clicked, pesquisa]);

    let adicionado = false;
    let posicao;
    const addToCart = (item) => {
        const itens = [item.name, item.desciption, item.price, item.avatar, item.id];

        carrinho.forEach((e, i) => {
            if (e[4] == itens[4]) {
                adicionado = true;
                posicao = i;
            }
        })

        if (adicionado) {
            setCarrinho(carrinho, carrinho[posicao][5] = +carrinho[posicao][5] + 1)
        }
        else {
            itens.push(1)
            setCarrinho(carrinho, carrinho.unshift(itens))
        }
    }

    return (
        <S.Produtos>
            {produtosFiltrados.map((item) => (
                <S.Product key={item.id} onClick={() => setPaginaInformacao([item.name, item.desciption, item.price, item.avatar, item.id])}>
                    <figure>
                        <Link to="/produto">
                            <img src={item.avatar} alt={item.name} />
                        </Link>
                    </figure>
                    <S.ProductText>
                        <Link to="/produto">
                            <h2>
                                {item.name}
                            </h2>
                            <h3>
                                ${item.price}
                            </h3>
                            <p>
                                {item.desciption} <span>...</span>
                            </p>
                        </Link>
                        <button onClick={() => addToCart(item)}>
                            <img src={Cart} alt="Adicionar ao Carrinho" title="Adicionar ao Carrinho" />
                        </button>
                    </S.ProductText>
                </S.Product>
            ))}
            <S.ErrorMessage style={{display:errorDisplay}}>
                Não foi possível encontrar este produto. :&#40;
            </S.ErrorMessage>
        </S.Produtos>
    )
}