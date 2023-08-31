import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './Component/Add';
import View from './Component/View';
import Edit from './Component/Edit';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/view' element={<View/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
