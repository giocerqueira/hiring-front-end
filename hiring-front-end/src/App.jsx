import Footer from "./components/Footer/Footer.jsx"
import {BrowserRouter} from 'react-router-dom' 
import Header from "./components/Header/Header.jsx"
import Rotas from "./pages/Rotas/Rotas.jsx"
import { GlobalStyle } from '../src/components/GlobalStyle/GlobalStyle.jsx'
import { useState } from "react"

function App() {

  const [pesquisa, setPesquisa] = useState('')

  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Header 
        setPesquisa={setPesquisa}
      />
      <Rotas 
        pesquisa={pesquisa}
      />
      <Footer />
    </BrowserRouter>


    </>
  )
}

export default App