import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "./Routes/Register";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>} exact/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
