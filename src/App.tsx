import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {css} from "@emotion/react";
import {Button} from "antd";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <div className={'text-2xl'}>text</div>
          <div css={css`
            font-size: 50px;
          `}>text</div>
          <Button type={"primary"}>primary</Button>
          <Button type={"text"}>primary</Button>
          <Button type={"dashed"}>primary</Button>
          <Button type={"link"}>primary</Button>
          <Button type={"default"}>primary</Button>
        <a href="https://vite.dev" target="_blank">
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
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
https://github.com/adseng/vite-react-templatev4.git