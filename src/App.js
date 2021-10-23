import Navigation from "./components/Navigation";
import Main from "./components/Main/Main";
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [next, setNext] = useState('');
  const [nextCount, setNextCount] = useState(0);

  useEffect(() => getData(), [count]);
  useEffect(() => getNextPage(), [nextCount])

  const getNextPage = () => {
    if(next) {
      axios.get(`/api/tweets${next}`, {
      }).then(res => {
          data.push.apply(data, res.data['statuses']);
          setNext(res.data["search_metadata"].next_results);
        })
        .catch(err => console.log(err.message))
    }
  }

  function getData() {
    if(!search) return;

    axios.get('/api/tweets', {
      params: {
        q: search,
        count: 10,
      }
    })
      .then(res => {
        setData(res.data['statuses']);
        setNext(res.data["search_metadata"].next_results);
      })
      .catch(err => console.log(err.message))
  }

  return (
    <div className='container'>
      <Navigation />
      <Main setSearch={setSearch} setNextCount={setNextCount} setCount={setCount} data={data} />
    </div>
  );
}

export default App;
