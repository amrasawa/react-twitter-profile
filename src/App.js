import logo from './logo.svg';
import './App.css';
import SideBar from './Components/SideBar';
import Navbar from './Components/Navbar';
import MainPage from './Components/MainPage';
import { dividerClasses } from '@mui/material';
function App() {
  return (
    <div className='row'>

      <Navbar/>
      <MainPage/>
      <SideBar/>
    </div>
    
  );
}

export default App;
