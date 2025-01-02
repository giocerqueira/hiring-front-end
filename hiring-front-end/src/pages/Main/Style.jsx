import styled from "styled-components";

export const Main = styled.main `
    display: grid;
    grid-template-columns: 1fr 4fr 4fr 4fr 1fr;
    article {
        padding: 1rem 0;
    }
    header {
        display: flex;
        padding: 1rem 0;
        align-items: center;
        justify-content: space-between;
    }
`

export const MainContainer = styled.div `
    grid-column: 2 / 5;
`

export const Ordernar = styled.nav `
    label {
        display: flex;
        color: #FF6F91;
        gap: 1rem;
        font-size: 1.25rem;
        font-weight: 600;
        align-items: center;
    }
    select {
        width: 100%;
        padding: .5rem 1rem;
        font-size: 1rem;
        font-weight: 500;
        border-radius: 12px;
        color: #583a00;
        letter-spacing: 1px;
        cursor: pointer;
    }
`