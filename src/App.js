import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>

    </div>
  )
}

export default App
