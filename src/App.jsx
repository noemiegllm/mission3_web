import { useState } from 'react';
import Research from './components/searchBar.jsx';
import ListMeal from './components/listMeal.jsx';
import './App.css';

function App() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <>
    <h1>M3 - React Core</h1>
    <Research onSearchResult={(data) => setResult(data)} setLoading={setLoading}></Research>
    {loading && (
      <img src="src/assets/loading.gif" id="loadingGIF" alt="Loading..." width="50"/>
    )}
    <ListMeal resultApi={result}></ListMeal>
    </>
  )
}

export default App