import {Routes, Route} from 'react-router-dom'
import Carrinho from '../Carrinho/Carrinho.jsx'
import MainPage from '../Main/Main.jsx'
import ProductPage from '../ProductPage/ProductPage.jsx'
import { useState } from 'react'

export default function Rotas({pesquisa}) {

    const [paginaInformacao, setPaginaInformacao] = useState('')
    const [carrinho, setCarrinho] = useState([])
    const [cartCount, setCartCount] = useState(0);

    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage 
                                            pesquisa={pesquisa}
                                            setPaginaInformacao={setPaginaInformacao}
                                            setCarrinho={setCarrinho}  
                                            carrinho={carrinho} 
                                        />}/>
                <Route path='/carrinho' element={<Carrinho
                                                    carrinho={carrinho}/>}/>
                                                    setCartCount={setCartCount}
                <Route path='/produto' element={<ProductPage
                                                    paginaInformacao={paginaInformacao}
                                                    setCarrinho={setCarrinho}  
                                                    carrinho={carrinho} 
                                                />}/>
            </Routes>
        </>
    )
}