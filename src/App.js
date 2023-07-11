import Homepage from "./pages/Homepage";
import data from "./helper/data";
import "./app.css"

function App() {
  return (
    <div className="App">
      <Homepage data={data}/>
    </div>
  )
}

export default App
