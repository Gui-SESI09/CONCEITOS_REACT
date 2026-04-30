import { useState } from 'react'
import './App.css'
import Login from './paginas/Login'
import Cadastro from './paginas/Cadastro'
import Usuario from './paginas/Usuario'

function App() {
  const [tela, setTela] = useState('login')
  
  const renderizarTela = () => {
    if (tela === 'login') {
      return <Login/>
    } else if (tela === 'cadastro') {
      return <Cadastro/>
    } else if (tela === 'usuario') {
      return <Usuario/>
    }
    
  }

  const trocarTela = (pagina) => {
    setTela(pagina)
  }

  return (
    <>
    <h1>pikachu</h1>
    <button onClick={ () => trocarTela('login')}>Login</button>
    <button onClick={ () => trocarTela('cadastro')}>Cadastro</button>
    <button onClick={ () => trocarTela('usuario')}>Usuario</button>
    {renderizarTela()}
    </>
  )
}

export default App
