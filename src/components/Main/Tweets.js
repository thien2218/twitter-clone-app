import search from '../../images and icons/search-icon.svg';

const Tweets = () => {
    return (
        <div className='content'>
            <div className='search'>
                <input type="text" placeholder='Search Tweets'/>
                <img src={search} alt='Search' className='searchBtn'></img>
            </div>
        </div>
    )
}

export default Tweets
