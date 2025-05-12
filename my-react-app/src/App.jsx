import './App.css'
import Container from './Container.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

function App() {
  return (
    <>
    <ThemeProvider>
      <Container />
    </ThemeProvider>
    
    </>
  )
}

export default App
