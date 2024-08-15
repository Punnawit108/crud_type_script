import {  BrowserRouter,Routes,Route } from "react-router-dom"
import Content from "./Components/Content"
import './index.css'
import Add from "./Components/Add"

function App() {
 
  
  return (
    <>
    <div className="flex items-center justify-center h-screen">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Content/>} />
        <Route path = "/add" element = {<Add/>} />

      </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
