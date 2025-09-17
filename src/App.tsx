import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Favourites from './pages/Favourites';

function App() {
  return (
  <BrowserRouter>
<Routes>
  <Route path='/' element={<Landing/>} />
  <Route path='/library-auth' element={<Auth/>} />
  <Route path='/dashboard' element={<Dashboard/>} />
  <Route path='/favourites' element={<Favourites/>} />
</Routes>
  </BrowserRouter>
  )
}

export default App
