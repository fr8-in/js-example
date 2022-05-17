import Counter from './Counter';
import Login from "./Login";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './Register';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Counter />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
