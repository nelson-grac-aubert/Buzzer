import DevPage from "./pages/DevPage"
import HomePage from "./pages/HomePage"
import PlayerJoinPage from "./pages/player/PlayerJoinPage"
import HostSetupPage from "./pages/host/HostSetupPage"

import { Route, Routes } from "react-router"

function App() {
  return( 
  <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/dev" element={<DevPage />}></Route>
    <Route path="/join" element={<PlayerJoinPage />}></Route>
    <Route path="/host" element={<HostSetupPage />}></Route>
  </Routes>
  )
}

export default App
