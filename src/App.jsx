import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [theme, setTheme] = useState(0)
  const [name,setName] = useState("Balacobaco")
  const[count,setCount] = useState(0)
  const[senai,setSenai] = useState("")

  return (
    <>
      <div>
      <button onClick={() => setCount((count) => count + 10)}>
      count is {count}
        </button>
      </div>
      <div>
      <button onClick={() => setCount((count) => count - 10)}>
      count is {count}
        </button>
      </div>
       <button onClick={() => setTheme(theme ? false : true)}>Aparecer balacubacu</button>
       {theme ?
       <div className='Balacobaco'>
        <h1>{name}</h1>
       </div>
       : <div className='sem Balacobaco'>
        <h1></h1>
        </div>
        }
        <div className='escrever'>
        <input type="escrever" value={senai} onChange={(e) => setSenai(e.target.value)}/>
        <p>Você digitou:{senai}</p>
        {senai === 'senai' && <p>Apareci!</p>}            
        </div>
      {/* {theme ?
      <div className='fundo-preto'>
        <h1>NOME:{name}</h1>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      : <div className='fundo-branco'>
        <h1>Nome: {name}</h1>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
      </div>
      }
      {/* <div> */}
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}
export default App
