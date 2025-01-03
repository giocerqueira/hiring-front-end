import styled from "styled-components";

export const Carrinho = styled.main `
    display: flex;
    margin-top: 3rem;
    gap: 3rem 1rem;
    flex-direction: column;
    button  {
    transition: opacity .1s ease;
        &:hover {
            opacity: .9;
        }
    }
    h1 {
        grid-column: 2 / 4;
    }
    @media (max-width: 700px) {
        h1 {
            grid-column: 1 / 5;
            padding: 0 1.5rem;
        }
    }
`

export const CarrinhoContainer = styled.article `
    grid-column: 2 / 3;
    background-color: #f7f7f7;
    display: grid;
    border-radius: 8px;
    gap: 1rem;
    @media (max-width: 700px) {
        & {
            grid-column: 1 / 5;
            padding: 0 .5rem;
        }
    }
`
export const CarrinhoItem = styled.main `
    display: flex;
    background-color: #e4e4e46a;
    border-radius: 8px;
    figure {
        max-width: 150px;
        display: flex;
        img {
            width: 100%;
            border-radius: 8px;
        }
    }
    div {
        display: flex;
        padding: .5rem 1rem;
        flex-direction: column;
        gap: .5rem;
        h2 {
            font-size: 1.25rem;
        }
        h3 {
            font-weight: 500;
            font-size: 1rem;
        }
        h4 {
            font-size: .75rem;
            margin-top: 1rem;
            font-weight: 500;
            justify-self: end;
            color: gray;
        }
        button {
            background-color: #ffffff;
            border: solid pink;
            letter-spacing: 1px;
            font-size: .75rem;
            font-weight: 700;
            border: none;
            padding: .25rem 1rem;
            cursor: pointer;
            border-radius: 6px;
        }
    }
`
export const FinalizarCompra = styled.aside `
    height: fit-content;
    padding: 1.5rem 1rem;
    background-color: #f7f7f7;
    border-radius: 8px;
    section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        h2 {
            font-size: 1.75rem;
            margin-bottom: .3125rem;
        }
        h3 {
            font-size: 1rem;
        }
        button {
            padding: .5rem 1rem;
            border: none;
            background-color: green;
            color: black;
            font-weight: 600;
            border-radius: 50px;
            height: fit-content;
            cursor: pointer;
        }
    }
    @media (max-width: 700px) {
        & {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            border-radius: 0px;
            box-shadow: 0 0px 10px #7c7c7c;
        }
    }
`
export const ErroMsg = styled.h4 `
    font-size: 1.5rem;
    font-weight: 500;
    color: #bebebe;
    user-select: none;
`
