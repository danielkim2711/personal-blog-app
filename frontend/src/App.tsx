import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './layouts/Navbar';
import Header from './components/Header';
import Description from './components/Description';
import PostList from './components/PostList';

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Description />
      <PostList />
    </Router>
  );
}

export default App;
