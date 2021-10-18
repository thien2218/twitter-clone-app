import Trends from "./Trends";
import Tweets from "./Tweets";

const Main = ({ setSearch, data }) => {
    return (
        <div className='main'>
            <Tweets setSearch={setSearch} data={data} />
            <Trends />
        </div>
    )
}

export default Main
