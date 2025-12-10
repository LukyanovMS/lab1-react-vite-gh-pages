import { useState } from 'react'
import Counter from './components/Counter'
import UserTable from './components/UserTable'
import reactLogo from './assets/react.svg' // Импортируем из assets
import viteLogo from '/vite.svg' // Из public
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/components/Counter.jsx</code> and save to test HMR
        </p>
      </div>
      <Counter />
      <div style={{ marginTop: '30px' }}>
        <h2>Таблица пользователей</h2>
        <UserTable />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App