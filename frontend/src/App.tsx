import DevPage from "./pages/DevPage"
import HomePage from "./pages/HomePage"
import { Route, Routes } from "react-router"

function App() {
  return( 
  <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/dev" element={<DevPage />}></Route>
  </Routes>
  )
}

export default App
