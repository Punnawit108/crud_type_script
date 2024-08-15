import {  BrowserRouter,Routes,Route } from "react-router-dom"
import Content from "./Components/Content"
function App() {
 

  return (
    <>
    <div className="flex items-center justify-center h-screen">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Content/>} />

      </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
