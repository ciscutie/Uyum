import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavigationRoute from './Routes';

function App() {
  return (
    <div className='bg-yellow-200 '>
      <Router>
        <Navbar />
        <NavigationRoute />
      </Router>
    </div>
  );
}

export default App;
