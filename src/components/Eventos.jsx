
export function Eventos() {
  function pegarClick() {
    console.log(pegarClick);
  }
  function pegarInput(e) {
    console.log(e.target.value);
  }



  return (
    <div className="eventos">
      <input onChange={pegarInput}

        placeholder={"pesquise um repo"}

      ></input>
      <button class='button-input' onClick={pegarClick}>
        <img class="img-btn" src="https://cdn-icons-png.flaticon.com/128/969/969593.png" alt="" />
      </button>
    </div>

  )
}