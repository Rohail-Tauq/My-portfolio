import Landing from './pages/Landing'
import MainPage from './pages/MainPage'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/main' element={<MainPage />} />
    </Routes>
  )
}

export default App
