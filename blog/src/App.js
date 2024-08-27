import './App.css';
import {Route, Routes} from "react-router-dom";
import Blog from './components/Blogs/Blog';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <main>
      <Navbar/>
      <Blog/>
    </main>
  );
}

export default App;
