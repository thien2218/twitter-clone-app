import search from '../../images/search-icon.svg';

const Tweets = ({ setSearch, data, setCount }) => {
    const onEnter = e => {
        if(e.key === 'Enter') {
            setCount(prevCount => prevCount += 1);
        }
    }

    return (
        <div className='content'>
            <div className='search'>
                <input id='search' type="text" placeholder='Search Tweets' onChange={e => setSearch(encodeURIComponent(e.target.value))} onKeyUp={e => onEnter(e)}/>
                <div className='searchBtn' onClick={() => setCount(prevCount => prevCount += 1)}><img src={search} alt='Search'></img></div>
            </div>

            {data.map(tweet => (
                <div className="tweet" key={tweet.id_str}>
                    <div className="tweet-box">
                        <div className="tweet-info">
                            <div className="tweet-user-pfp"><img src={tweet.user.profile_image_url} alt="PFP" /></div>
                            <div className="user">
                                <div className="name">{tweet.user.name}</div>
                                <div className="username">{tweet.user.screen_name}</div>
                            </div>
                        </div>

                        {tweet.extended_entities && <div className="tweet-ivg">
                            {tweet.extended_entities.media.map(img => (
                                <div className="image" style={{ backgroundImage: `url(${img.media_url})` }}></div>
                            ))}
                        </div>}

                        <div className="tweet-text">{tweet.full_text}</div>

                        <div className="tweet-time">20 hours ago</div>
                    </div>
                </div>
            ))}
            
            {data[0] && <div className="next"><i className="fas fa-arrow-down"></i></div>}
        </div>
    )
}

export default Tweets
