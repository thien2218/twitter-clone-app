import search from '../../images/search-icon.svg';
import moment from 'moment';

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

            {data.map(tweet => {
                const createdAt = moment(tweet.created_at).fromNow();

                return <div className="tweet" key={tweet.id_str}>
                    <div className="tweet-box">
                        <div className="tweet-info">
                            <div className="tweet-user-pfp"><a target='_blank' rel="noreferrer" href={`https://twitter.com/${tweet.user.screen_name}`}></a><img src={tweet.user.profile_image_url} alt="PFP" /></div>
                            <div className="user">
                                <div className="name">{tweet.user.name}</div>
                                <div className="username">{tweet.user.screen_name}</div>
                            </div>
                        </div>

                        {tweet.extended_entities && 
                        <div className="tweet-ivg">
                            {tweet.extended_entities.media.map(obj => {
                                if(obj.type === 'photo') {
                                    return <div className="image" key={obj.id_str} style={{ backgroundImage: `url(${obj.media_url})` }}><a href={obj.media_url} rel="noreferrer" target='_blank'></a></div>
                                } else if(obj.type === 'video') {
                                    return <video controls><source src={obj.video_info.variants.find(o => o.content_type === 'video/mp4').url} type='video/mp4' /></video>
                                } else {
                                    return <video loop autoPlay><source src={obj.video_info.variants[0].url} type='video/mp4' /></video>
                                }
                            })}
                        </div>}

                        <div className="tweet-text">{tweet.full_text}</div>

                        <div className="tweet-time">{createdAt}</div>
                    </div>
                </div>
            })}
            
            {data.length > 0 && <div className="next"><i className="fas fa-arrow-down"></i></div>}
        </div>
    )
}

export default Tweets
