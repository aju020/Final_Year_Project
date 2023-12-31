import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Features from './components/features/Features.jsx';
import Manufacturer from './components/stakeholders/Manufacturer.jsx';
import Retailers from './components/stakeholders/Retailers.jsx';
import Rms from './components/stakeholders/Rms.jsx';
import Government from './components/stakeholders/Government.jsx';
import Distributors from './components/stakeholders/Distributors.jsx';
import Register from './components/government/Register.jsx';
import Tracker from './components/tracker.jsx';
import ManufacturerMed from './components/manufacturer/ManufacturerMed.jsx';
import SupplyRm from './components/RMS/SupplyRm.jsx';
import DenyRm from './components/RMS/DenyRm.jsx';


function App() {
  return (
        <Router>
                <div className='App'>
                <Header />
                <Routes>
                        <Route path='/' Component={Home} />
                        <Route path='/government' Component={Government} />
                        <Route path='/register' Component={Register} />
                        <Route path='/rms' Component={Rms} />
                        <Route path='/supplyrms' Component={SupplyRm} />
                        <Route path='/denyrms' Component={DenyRm} />
                        <Route path='/manufacturers' Component={Manufacturer} />
                        <Route path='/medicineManufacture' Component={ManufacturerMed} />
                        <Route path='/distributors' Component={Distributors} />
                        <Route path='/retailers' Component={Retailers} />
                        <Route path='/track' Component={Tracker} />
                </Routes> 
                </div>
        </Router>
  );
}

export default App;
