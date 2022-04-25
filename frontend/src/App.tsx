import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './layouts/Navbar';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
    </Router>
  );
}

export default App;
