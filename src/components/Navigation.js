import landscape from '../images/landscape.png'

const Navigation = () => {
    return (
        <nav className='navBar'>
            <div className='icon'><i className="fab fa-twitter twitter"></i></div>
            <div className='navItem active'><i className="fas fa-home"></i></div>
            <div className='avatar'><img alt='Profile Pic' src={landscape}></img></div>
        </nav>
    )
}

export default Navigation
