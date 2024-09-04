import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from './components/Body/Body';
import About from './pages/About/About'; // Make sure to create this file
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import BlogPosts from './pages/Blogposts/Blogposts';

function App() {
  console.log("App is rendering");
  return (
    <div>
      <main>
        <Navbar />
        <Routes>
        <Route path="/" element={<Body />} />
          <Route path="/Blog" element={<BlogPosts />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;