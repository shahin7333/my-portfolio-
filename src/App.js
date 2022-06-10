import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer';
import About from './Components/Home/About';
import Contact from './Components/Home/Contact';
import Home from './Components/Home/Home';
import ProjectList from './Components/Home/ProjectList';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div>
<Navbar></Navbar>
 <Routes>
   <Route path='/' element={<Home></Home>}></Route>
   <Route path='/home' element={<Home></Home>}></Route>
   <Route path='/project' element={<ProjectList></ProjectList>}></Route>
   <Route path='/about' element={<About></About>}></Route>
   <Route path='/contact' element={<Contact></Contact>}></Route>
   <Route path='/blogs' element={<Blogs></Blogs>}></Route>
 </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
