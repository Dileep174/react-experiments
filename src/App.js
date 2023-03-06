import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Navbar from './MyComponents/Navbar';
import Home from './MyComponents/Home';
import Careers from './MyComponents/Careers';
import Header from './MyComponents/Header';
import Brands from './MyComponents/Brands';
import SingleBrands from './MyComponents/SingleBrands';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Careers" element={<Careers />} />
          <Route exact path="/Brands" element={<Brands />} />
          <Route exact path="/SingleBrands" element={<SingleBrands />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
