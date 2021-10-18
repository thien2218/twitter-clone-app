import search from '../../images/search-icon.svg';
import meme from '../../images/meme.jpg';
import pfp from '../../images/landscape.png';

const Tweets = () => {
    return (
        <div className='content'>
            <div className='search'>
                <input type="text" placeholder='Search Tweets'/>
                <div className='searchBtn'><img src={search} alt='Search'></img></div>
            </div>

            <div className="tweet">
                <div className="tweet-box">
                    <div className="tweet-info">
                        <div className="tweet-user-pfp"></div>
                        <div className="user">
                            <div className="name">William</div>
                            <div className="username">@william</div>
                        </div>
                    </div>

                    <div className="tweet-ivg"></div>

                    <div className="tweet-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis dolore quam ad nobis, quae hic cupiditate eligendi dolor voluptatum incidunt voluptate tempore natus tempora, minima, officia earum amet ipsum recusandae reiciendis possimus? Veritatis consequuntur nemo quidem error minima, quo eum vero, cumque pariatur ea aliquid modi magnam libero velit?</div>

                    <div className="tweet-time">20 hours ago</div>
                </div>
            </div>
            
            <div className="next"><i className="fas fa-arrow-down"></i></div>
        </div>
    )
}

export default Tweets
