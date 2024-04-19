import  img  from './assets/investment-calculator-logo.png'
import Container from './modules/Container'
function App() {
  return <div>
    <header id="header">
      <img src={img} alt="logo" />
      <h1>investment calculator</h1>
    </header>
    <Container />
  </div>
}

export default App
