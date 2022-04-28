import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './layouts/Navbar';
import Header from './components/Header';
import Description from './components/Description';
import PostList from './components/PostList';

import Post from './pages/Post';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header />
                <Description />
                <PostList />
              </>
            }
          />
          <Route path='/posts/:postId' element={<Post />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
