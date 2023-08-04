import michaelscott from "./img/michaelscott.png"
import theintern from "./img/theintern.png"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Clase 2 - Front end III</h1>
        <p>El bimestre que viene es el proyecto integrador y vos tipo:</p>
        <img src={michaelscott} alt="michael-scott" />
        <img src={theintern} alt="the intern" />
      </header>
    </div>
  )
}

export default App
