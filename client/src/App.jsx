import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import './App.css'
import Auth from './pages/auth/index';

import Home from './pages/dashboard/index';
function App() {

  return (
   
    <Router>
  <div className='app_container'>
    
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Auth />} />
      </Routes>
  </div>
    </Router>

  )
}

export default App
