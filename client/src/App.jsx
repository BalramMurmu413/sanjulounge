import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home.jsx'
import Blog from './Pages/Blog.jsx'
import Contact from './Pages/Contact.jsx'
import Service from './Pages/Service.jsx'
import MaintanancePage from './Pages/MaintanancePage.jsx';


function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/maintanance" element={<MaintanancePage/>} />
        </Routes>
    </>
  )
}

export default App
