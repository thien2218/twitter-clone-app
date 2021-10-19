import Navigation from "./components/Navigation";
import Main from "./components/Main/Main";
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => getData(), [count]);

  function getData() {
    if(!search) return;

    axios.get('/api/tweets', {
      params: {
        q: search,
        count: 10,
      }
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err.message))
  }

  return (
    <div className='container'>
      <Navigation />
      <Main setSearch={setSearch} setCount={setCount} data={data} />
    </div>
  );
}

export default App;
