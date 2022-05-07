import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './layouts/Navbar';

import Header from './components/Header';
import Description from './components/Description';
import PostList from './components/PostList';
import PrivateRoute from './components/PrivateRoute';

import About from './pages/About';
import Categories from './pages/Categories';
import Programming from './pages/Programming';
import Sports from './pages/Sports';
import Miscellaneous from './pages/Miscellaneous';
import Login from './pages/Login';
import Post from './pages/Post';
import NewPost from './pages/NewPost';
import UpdatePost from './pages/UpdatePost';

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
          <Route
            path='/about'
            element={
              <>
                <Navbar />
                <About />
              </>
            }
          />
          <Route path='/categories' element={<Categories />} />
          <Route
            path='/programming'
            element={
              <>
                <Navbar />
                <Header />
                <Description />
                <Programming />
              </>
            }
          />
          <Route
            path='/sports'
            element={
              <>
                <Navbar />
                <Header />
                <Description />
                <Sports />
              </>
            }
          />
          <Route
            path='/miscellaneous'
            element={
              <>
                <Navbar />
                <Header />
                <Description />
                <Miscellaneous />
              </>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/new-post' element={<PrivateRoute />}>
            <Route path='/new-post' element={<NewPost />} />
          </Route>
          <Route
            path='/posts/:postId'
            element={
              <>
                <Navbar />
                <Post />
              </>
            }
          />
          <Route path='/posts/:postId/update-post' element={<PrivateRoute />}>
            <Route path='/posts/:postId/update-post' element={<UpdatePost />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
