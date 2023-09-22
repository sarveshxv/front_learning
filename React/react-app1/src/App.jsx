import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Slots from './Slots'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Slots v1="a" v2="a" v3="a"/>
      <Slots v1="a" v2="b" v3="a"/>
      <Slots v1="a" v2="a" v3="c"/>
      <Slots v1="v" v2="b" v3="a"/>
      <Slots v1="a" v2="a" v3="a"/>
      <Slots v1="b" v2="b" v3="b"/>
    </>
  )
}

export default App
