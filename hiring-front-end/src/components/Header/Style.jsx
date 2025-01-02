import styled from "styled-components";

export const Header = styled.header `
    border-bottom: 2px solid rgba(206, 206, 206, 0.459);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    background-color: #fff;
`

export const Logo = styled.div `
    display: flex;
    grid-column: 2 / 3;
    img {
        width: 10rem;
        cursor: pointer;
        &:hover {
            opacity: .9;
        }
    }
    @media (max-width: 700px) {
        img {
            width: 8rem;
        }   
    }
`

export const SearchBar = styled.div `
    display: flex;
    height: fit-content;
    grid-column: 3 / 4;
    width: 35%;
    input {
        width: 100%;
        background-color: #f7f7f7;
        border: 1px solid #FF6F91 ;
        font-size: 0.9rem;
        padding: 0 1rem;
        transition: border .1s ease;
        &:focus {
            outline: none;
            border: 1px solid #FF6F91 ;
        }
    }
    button img {
        width: 21px;
    }
    button {
        background-color: #FF6F91;
        cursor: pointer;
        padding: 0.45rem 0.75rem;
        transition: opacity .2s ease;
        border: none;
        &:hover {
            opacity: 0.9;
        }
    }

    @media (max-width: 700px) {
        & {
            grid-row: 2 / 3;
            grid-column: 2 / 5;
        }
}
`

export const Carrinho = styled.section `
    padding: 0 .5rem;
    display: flex;
    justify-content: end;
    div {
        display: flex;
    }
    div img {
        display: flex;
        width: 28px;
        transition: opacity .2s ease;
        &:hover {
            opacity: .7;
        }
    }
    @media (max-width: 700px) {
        & {
            grid-column: 4 / 5;
        }
    }
`