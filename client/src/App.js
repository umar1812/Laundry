import Createorder from "./components/createorder/createorder"
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/order" element={<Createorder/>} ></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
