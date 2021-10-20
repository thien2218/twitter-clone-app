

const Trends = ({ getTrend }) => {
    return (
        <div className='trend'>
            <div className='trending-box'>
                <span className='head'>Trends for you</span>
                <span onClick={e => getTrend(e)}>#chess</span>
                <span onClick={e => getTrend(e)}>#code</span>
                <span onClick={e => getTrend(e)}>#violin</span>
                <span onClick={e => getTrend(e)}>#concerto</span>
                <span onClick={e => getTrend(e)}>#JavaScript</span>
                <span onClick={e => getTrend(e)}>#Python</span>
            </div>
        </div>
    )
}

export default Trends
