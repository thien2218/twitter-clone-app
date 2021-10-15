import landscape from '../images and icons/landscape.png'

const Navigation = () => {
    return (
        <nav className='navBar'>
            <div className='icon'><i className="fab fa-twitter twitter"></i></div>
            <div className='navItem active'><i className="fas fa-home"></i></div>
            <img alt='Profile Pic' className='avatar' src={landscape}></img>
        </nav>
    )
}

export default Navigation
