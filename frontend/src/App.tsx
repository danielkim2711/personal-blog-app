import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './layouts/Navbar';
import Header from './components/Header';
import Description from './components/Description';
import PostList from './components/PostList';

import Login from './pages/Login';
import Post from './pages/Post';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Navbar />
                <Header />
                <Description />
                <PostList />
              </>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route
            path='/posts/:postId'
            element={
              <>
                <Navbar />
                <Post />
              </>
            }
          />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
