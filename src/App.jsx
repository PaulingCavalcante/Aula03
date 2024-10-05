import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Planetas, { Terra } from './components/Planetas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {

        <div>
          <Planetas />
          <Terra
            idade={10}
            nomePlanet={"Terra"}
            descPlanet={{
              descricao: 'Planeta Terra',
              idade: '4,54bi anos',
              populacao: '8bi'
            }}
          />
        </div>
      }
    </>
  )
}

export default App
