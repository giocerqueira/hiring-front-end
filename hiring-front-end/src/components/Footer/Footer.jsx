import * as S from "./Style.jsx"
import Logo from '../../assets/logo.png'

export default function Footer() {

    return (
        <S.Footer>
            <img src={Logo} alt="" />
            <ul></ul>
            <p>
                Made with ♥ by Giovanna Cerqueira
            </p>
        </S.Footer>
    )
}