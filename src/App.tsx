import './App.css'
import { BrowserRouter} from 'react-router-dom'
import RoutesHandler from './services/RouteHandler'
function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesHandler />
      </BrowserRouter>
    </>
  )
}

export default App
