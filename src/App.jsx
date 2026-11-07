import { useState } from 'react';
import Research from './components/searchBar.jsx';
import CardMeal from './components/cardMeal.jsx';
import ListMeal from './components/listMeal.jsx';
import './App.css';

function App() {
  const [result, setResult] = useState([]);
  return (
    <>
    <h1>M3 - React Core</h1>
    <Research onSearchResult={(data) => setResult(data)}></Research>
    <ListMeal resultApi={result}></ListMeal>
    </>
  )
}

export default App
