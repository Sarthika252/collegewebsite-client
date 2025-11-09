import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Admission from './pages/Admission';
import Departments from './pages/Departments';
import DepartmentDetail from './pages/DepartmentDetail';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const stored = localStorage.getItem("user");
  //   if (stored) setUser(JSON.parse(stored));
  // }, []);
  return (
    <Router>
      <Header  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/:id" element={<DepartmentDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
