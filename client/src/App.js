import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Private from './components/Private';
import Pastorders from "./components/pastorder/pastorders";
import OrderSucess from "./components/createorder/alert";
import Createorder from "./components/createorder/createorder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<Private />}>
          <Route path="/order" element={<Createorder />} ></Route>
          <Route path="/order/history" element={<Pastorders />} ></Route>
          <Route path="/order/popup" element={<OrderSucess />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
//check git
export default App;
