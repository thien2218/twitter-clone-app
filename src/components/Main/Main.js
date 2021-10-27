import Trends from "./Trends";
import Tweets from "./Tweets";

const Main = ({ setSearch, data, setCount, setNextCount }) => {
    // Get trending tweets when clicking the trends on the trend bar
    const getTrend = e => {
        document.getElementById('search').value = e.target.innerHTML;
        setSearch(e.target.innerHTML);
        setCount(prevCount => prevCount += 1);
    }

    return (
        <div className='main'>
            <Tweets setSearch={setSearch} setNextCount={setNextCount} setCount={setCount} data={data} />
            <Trends getTrend={getTrend} />
        </div>
    )
}

export default Main
