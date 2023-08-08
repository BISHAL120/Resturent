import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Menu from './Pages/Menus/Menu';
import Breakfast from './Pages/Items/Breakfast';
import Lunch from './Pages/Items/Lunch';
import Dinner from './Pages/Items/Dinner';
import Footer from './Pages/Shared/Footer/Footer';
import Aboutus from './Pages/Aboutus/Aboutus';

function App() {
  return (
    <div className='root'>
      <Header></Header>
      <Home></Home>
      <Menu></Menu>
      <Breakfast></Breakfast>
      <Lunch></Lunch>
      <Dinner></Dinner>
      <Aboutus></Aboutus>
      {/* <Routes>
        <Route path='/breakfast' element={<Breakfast></Breakfast>}></Route>
        <Route path='/lunch' element={<Lunch></Lunch>}></Route>
        <Route path='/dinner' element={<Dinner></Dinner>}></Route>
      </Routes> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
