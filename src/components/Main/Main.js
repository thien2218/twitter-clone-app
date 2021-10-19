import Trends from "./Trends";
import Tweets from "./Tweets";

const Main = ({ setSearch, data, setCount }) => {
    return (
        <div className='main'>
            <Tweets setSearch={setSearch} setCount={setCount} data={data} />
            <Trends />
        </div>
    )
}

export default Main
