
import navLogo from '../assets/nav-logo.png';
const Navbar = () => {
    return (
        <>
            <div className="navbar max-w-300  w-full flex gap-16 items-center  p-2 ">
                <div className="logo">
                    <img src={navLogo} alt="" className='w-16' />
                </div>
                <ul className="nav-links-container flex gap-8">
                    <li><a href="#" className="nav-link">Home</a></li>

                    <li><a href="#" className="nav-link">Categories</a></li>

                    <li><a href="#" className="nav-link">About Us</a></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar