import logo from './logo.svg';
import './App.css';
import Input from './components/input/input';
import Result from './components/result/result';
import Button from './components/button/button';
import List from './components/list/list';
import { Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className='header'>
        <Link className='link' to="/"><Input></Input></Link>
        <Link to="/variables"><Button></Button></Link>
      </div>

      <Routes>
        <Route path="/" element={<Result></Result>}></Route>
        <Route path="/variables" element={<List></List>}></Route>
      </Routes>

    </div>
  );
}

export default App;
