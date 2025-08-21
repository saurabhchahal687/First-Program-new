import logo from './logo.svg';
import './App.css';
import { MyFirstComponent, MySecondComponent } from './components/myFirstComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import SettingsPage from './components/settings'
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
      </Routes>
      <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/settings" end>
        Settings
      </NavLink>
      </nav>
    </BrowserRouter>
    
  );
}

export default App;
// /prop drilling
// state leveling up
// one way binding
// hello
// next branch
