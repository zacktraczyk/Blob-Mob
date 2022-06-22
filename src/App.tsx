import React, { useState } from 'react'
import Canvas from './Canvas'
import Login from './login/Login'
import { Init } from './game/main'

function App() {

  const draw = (ctx: CanvasRenderingContext2D) => Init(ctx);

  const [showLogin, setShowLogin] = useState(true);

  const handleClick = () => {
    setShowLogin(false);
  }

  let component: React.ReactNode;

  if (showLogin) {
    component = <Login onClick={() => handleClick()}/>
  } else {
    component = <Canvas draw={draw} width={500} height={500} />
  }

  return (
    <div className='main-container'>
      {component}
    </div>
  )
}

export default App