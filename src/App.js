import Navigation from "./components/Navigation";
import Main from "./components/Main/Main";
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [search, setSearch] = useState('')

  useEffect(() => getData(), [search]);

  function getData() {
    axios.get('/api/tweets', {
      params: {
        query: search
      }
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err.message))
  }

  return (
    <div className='container'>
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
