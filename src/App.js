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
//import Navbar from './comps/Navbar';

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar /> */}
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
