/* nav {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #373737;
    padding: 0 20px;
} */
header {
    background: #373737;
    font-size: bold;
    padding: 16px 0;
    border-radius: 3px;
}
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
nav a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    margin:0 40px;
}
.logo img {
    max-height: 3rem;
    float: left !important;
  }
  img {
    max-width: 100%;
  }

  nav a:hover {
    background-color: #00d4ff;
    padding: 15px 0;
    border-radius: 6px;
  }


  import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Boutique from './pages/boutique'
import About from './pages/domicile'
import Marche from './pages/marche'
import NotFound from './pages/PageNotFound'
import BlocGu from './pages/bloc'
import Navbar from './comps/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
            <Route path="/" element={<Boutique />} />
            <Route path="domicile" element={<About />} />
            <Route path="marche" element={<Marche />} />
            <Route path="bloc" element={<BlocGu />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
