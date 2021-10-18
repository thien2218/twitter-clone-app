import Navigation from "./components/Navigation";
import Main from "./components/Main/Main";
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState({})

  useEffect(() => getData(), [search]);

  function getData() {
    if(!search) return;

    axios.get('/api/tweets', {
      params: {
        query: search,
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err.message))
  }

  return (
    <div className='container'>
      <Navigation />
      <Main setSearch={setSearch} data={data} />
    </div>
  );
}

export default App;
