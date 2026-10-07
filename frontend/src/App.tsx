import DevPage from "./pages/DevPage"
import { Route, Routes } from "react-router"

function App() {
  return( 
  <Routes>
    <Route path="/dev" element={<DevPage />}></Route>
  </Routes>
  )
}

export default App
