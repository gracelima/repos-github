import { useState } from "react";

export function Contador() {
  //criando o state
  const [contador, setContador] = useState(0)

    function somar() {
    setCount(contador  +1)
  }

  function diminuir() {
    setCount(contador - 1)
  }
  return (
    <div className="contador">
      <button onClick={somar}> + </button>

      <h2> {contador} </h2>

      <button onClick={diminuir}> - </button>

    </div>
  )
}

