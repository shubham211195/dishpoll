import FoodContainer from './components/FoodContainer';
import Login from './components/Login';
import {Routes,Route} from 'react-router-dom';
import Result from './components/Result';
import NavHome from './components/NavHome';

function App() {
  return (
    <div>
        <NavHome />
        <Routes>
            <Route path='/dishpoll' element={<Login />} />
            <Route path='/food' element={<FoodContainer />} />    
            <Route path='/result' element={<Result />} />     
        </Routes>
    </div>
  );
}

export default App;
