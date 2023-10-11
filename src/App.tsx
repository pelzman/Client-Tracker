
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./component/About"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import "./App.css"


function App() {
  return (
    <Routes>
      <Route path="/" element={(<SignUp/>)}/>
      <Route path="/login" element={(<Login/>)}/>
      <Route path="/home" element={(<Home />)} />
      <Route path="/about" element={(<About />)} />

    </Routes>
  )
}

export default App
