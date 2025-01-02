import * as S from "./Style"
import ProductsArea from "../../components/Produtos/Produtos.jsx"
import { useState } from "react"

export default function MainPage({pesquisa, setPaginaInformacao, carrinho, setCarrinho}) {

    const [ordem, setOrdem] = useState()
    return (
        <S.Main>
            <S.MainContainer className="main-container">
                <ProductsArea 
                    ordem={ordem} 
                    pesquisa={pesquisa}
                    setPaginaInformacao={setPaginaInformacao}
                    carrinho={carrinho}
                    setCarrinho={setCarrinho}
                />
            </S.MainContainer>
        </S.Main>
    )
}