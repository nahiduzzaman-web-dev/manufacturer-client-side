import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Home/Blogs';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>

    </div>
  );
}

export default App;
