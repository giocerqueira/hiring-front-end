import Logo from "../../assets/logo.png"
import Search from "../../assets/search.png"
import Carrinho from "../../assets/carrinho.svg"
import * as S from "./Style.jsx"
import { Link } from "react-router-dom"

function Header({setPesquisa}) {
    return (
        <S.Header>
            <S.Logo>
                <Link to="/">
                    <img src={Logo} alt="Logo do site" />
                </Link>
            </S.Logo>
            <S.SearchBar>
                <input type="text" placeholder="Buscar produtos..." onChange={e => setPesquisa(e.target.value)}/>
                <button id="botao-pesquisa">
                    <img src={Search} alt="Botão para pesquisar"/>
                </button>
            </S.SearchBar>
            <S.Carrinho>
                <div>
                    <Link to="/carrinho">
                        <img src={Carrinho} alt="Botão para carrinho" />
                    </Link>
                </div>
            </S.Carrinho>
        </S.Header>
    )
}

export default Header;