import './App.css';
import {Route, Routes} from "react-router-dom";
import Blog from './components/Blogs/Blog';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <main>
      <Navbar/>
      <Blog/>
      <Footer/>
    </main>
  );
}

export default App;
