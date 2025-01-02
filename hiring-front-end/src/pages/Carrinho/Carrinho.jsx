import { useState } from "react";
import * as S from "./Style.jsx"

export default function Carrinho({carrinho, setCartCount}) {

    let total = 0;
    carrinho.forEach((e) => {
        total += (+e[2] * +e[5]);
    })

    const updateCartCount = () => {
        const count = carrinho.reduce((acc, item) => acc + item[5], 0); 
        setCartCount(count); 
    };

    const [map, setMap] = useState(
    carrinho.map((item) => (
        <S.CarrinhoItem key={item[4]}>
            <figure>
                <img src={item[3]} alt="" />
            </figure>
            <div>
                <h2>
                    {item[0]}
                </h2>
                <h3>
                    ${item[2]}
                </h3>
                <h4>
                    {item[5]} Unidade(s)
                </h4>
            <button onClick={() => excluir(item)}>
                Excluir Item
            </button>
            </div>
        </S.CarrinhoItem>
    )))

    const excluir = (item) => {
        carrinho.shift(item)
        updateCartCount();

        setTimeout(() => {
            setMap(carrinho.map((item) => (
                <S.CarrinhoItem key={item[4]}>
                    <figure>
                        <img src={item[3]} alt="" />
                    </figure>
                    <div>
                        <h2>
                            {item[0]}
                        </h2>
                        <h3>
                            ${item[2]}
                        </h3>
                        <h4>
                            {item[5]} Unidade(s)
                        </h4>
                    <button onClick={() => excluir(item)}>
                        Excluir Item
                    </button>
                    </div>
                </S.CarrinhoItem>)))
        }, 100) 
    }

    const finalizarCompra = () => {
        alert("Compra finalizada")
        location.reload()
    }
    return (
        <S.Carrinho>
            <h1>
                Carrinho
            </h1>
            <S.CarrinhoContainer>
                {map} 
            </S.CarrinhoContainer>
            <S.FinalizarCompra>
                <section>
                    <div>
                        <h2>
                            Total
                        </h2>
                        <h3>
                            ${total}
                        </h3>
                    </div>
                    <button onClick={() => finalizarCompra()}>
                            Finalizar Compra
                    </button>
                </section>
            </S.FinalizarCompra>
        </S.Carrinho>
    )
}