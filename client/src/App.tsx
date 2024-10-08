import {  BrowserRouter,Routes,Route } from "react-router-dom"
import Content from "./Components/Content"
import './index.css'
import Add from "./Components/Add"
import Edit from "./Components/Edit"
import { TodoProvider } from './Components/TodoContext'; 



function App() {
 
  
  return (
    <>
    <div className="flex items-center justify-center h-screen">
      <BrowserRouter>
      <TodoProvider>
      <Routes>
        <Route path = "/" element = {<Content/>} />
        <Route path = "/add" element = {<Add/>} />
        <Route path = "/edit" element = {<Edit/>} />


      </Routes>
      </TodoProvider>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
