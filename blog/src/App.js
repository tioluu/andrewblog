import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import Body from './components/Body/Body';
import About from './pages/About/About'; 
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import BlogPosts from './pages/Blogposts/Blogposts';
import Contact from './pages/Contact/Contact';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  }
};

const pageTransition = {
  duration: 0.5
};

function App() {
  const location = useLocation(); // Get the current route location

  return (
    <div>
      <main>
      <Navbar />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <motion.div 
                initial="initial" 
                animate="in" 
                exit="out" 
                variants={pageVariants} 
                transition={pageTransition}
              >
                <Body />
              </motion.div>
            } 
          />
          <Route 
            path="/Blog" 
            element={
              <motion.div 
                initial="initial" 
                animate="in" 
                exit="out" 
                variants={pageVariants} 
                transition={pageTransition}
              >
                <BlogPosts />
              </motion.div>
            } 
          />
          <Route 
            path="/About" 
            element={
              <motion.div 
                initial="initial" 
                animate="in" 
                exit="out" 
                variants={pageVariants} 
                transition={pageTransition}
              >
                <About />
              </motion.div>
            } 
          />
          <Route
          path="/Contact"
          element={
            <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            >
              <Contact/>
            </motion.div>
          }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
      </main>
    </div>
  );
}

export default App;
