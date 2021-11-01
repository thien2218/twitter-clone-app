import moment from 'moment';

const Tweets = ({ setSearch, data, setCount, setNextCount }) => {
    // Get search results when press enter on search
    const onEnter = e => {
        if(e.key === 'Enter') {
            setCount(prevCount => prevCount += 1);
        }
    }

    return (
        <div className='content'>
            <div className='search'>
                <input id='search' type="text" placeholder='Search Tweets' onChange={e => setSearch(encodeURIComponent(e.target.value))} onKeyUp={e => onEnter(e)}/>
                <div className='searchBtn' onClick={() => setCount(prevCount => prevCount += 1)}><svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.3552 27.1861L23.8411 20.7971C25.4944 18.613 26.4533 15.9401 26.4533 13.0389C26.4533 5.86751 20.5344 0 13.2267 0C5.952 0 0 5.83491 0 13.0389C0 20.2429 5.91893 26.0778 13.2267 26.0778C15.9381 26.0778 18.4843 25.2629 20.6005 23.8612L27.1808 30.3481C27.6107 30.7718 28.2059 31 28.768 31C29.3301 31 29.9253 30.7718 30.3552 30.3481C31.2149 29.4679 31.2149 28.0662 30.3552 27.1861ZM4.49707 13.0389C4.49707 8.27971 8.432 4.40063 13.2267 4.40063C18.0213 4.40063 21.9563 8.27971 21.9563 13.0063C21.9563 17.7329 18.0544 21.6446 13.2267 21.6446C8.39893 21.6446 4.49707 17.7655 4.49707 13.0389Z"/></svg></div>
            </div>

            {data.map(tweet => {
                const createdAt = moment(tweet.created_at).fromNow();
                const tweetText = tweet.full_text;
                const regex1 = /^RT @.\S{1,}\s/;
                const regex2 = /https:\/\/.\S{1,}\s*/g;
                const links = [...tweetText.matchAll(regex2)];
                const retweet = tweetText.match(regex1) && tweetText.match(regex1)[0];
                let fullText = tweetText.replace(retweet, '');

                for(let i = 0; i < links.length; i++) {
                    if(links.length) {
                        fullText = fullText.replace(links[i][0], '');
                    } else {
                        break
                    }
                }

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
                                    return <video controls key={obj.id_str}><source src={obj.video_info.variants.find(o => o.content_type === 'video/mp4').url} type='video/mp4' /></video>
                                } else {
                                    return <video loop autoPlay key={obj.id_str}><source src={obj.video_info.variants[0].url} type='video/mp4' /></video>
                                }
                            })}
                        </div>}

                        <div className="tweet-text">
                            <span>{retweet}</span>
                            <span>{fullText}</span>
                            {links.length > 0 && links.map(arr => (
                                <div className="link" key={arr['index']}>URL: <a href={arr[0]} rel="noreferrer" target='_blank'>{arr[0]}</a></div>
                            ))}
                        </div>

                        <div className="tweet-time">{createdAt}</div>
                    </div>
                </div>
            })}
            
            {data.length > 0 && <div className="next" onClick={() => setNextCount(prevCount => prevCount += 1)}><i className="fas fa-arrow-down"></i></div>}
        </div>
    )
}

export default Tweets
