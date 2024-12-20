import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SinglePost from './components/SinglePost';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { Route, Routes } from 'react-router-dom';
import CreatePost from './components/CreatePost';

function App() {
  // console.log(import.meta.env.VITE_API_URL);

  return (
    <>
      <MainLayout />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/post' element={<CreatePost />} />
        <Route path='/posts/:id' element={<SinglePost />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
