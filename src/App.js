import './App.css';
import Header from './Components/TrackerHome';
import {useDispatch, useSelector} from 'react-redux';
import { getUserExercise } from "./features/users"; 
import { useEffect } from 'react';
function App() {
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(getUserExercise())
  },[dispatch])
  return (
    <div className="App">
     <Header/>
    </div>
  );
}

export default App;
