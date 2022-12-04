import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function useWindowSize() {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerHeight, window.innerWidth]);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return size;
}

export default function NavBar() {
    const location = useLocation();
    const [height, width] = useWindowSize();

    const Bar = {
        height: window.innerHeight * 0.15,
        width: window.innerWidth,
        position: 'fixed',
        display: 'flex',
        backgroundImage: 'url("https://media3.giphy.com/media/smzfl3E7a4iHK/giphy.gif")',
        zIndex: '10'
    }

    const navList = {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',
        listStyleType: 'none',
        zIndex: '11'
    }

    const navList1 = {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        listStyleType: 'none',
        zIndex: '11'
    }

    const linkText = {
        color: 'white',
        fontSize: window.innerWidth * 0.02,
        textDecoration: 'none',
        zIndex: '12'
    }

    if (location.pathname == "/") {
        return (
            <div style={Bar}>
                <ul style={navList1}>
                    <li><img src={require('../../images/IMG_1276.jpg')} height={height * .1} width={width * .4} /></li>
                </ul>
            </div>
        )
    }
    else {
        return (
            <div style={Bar}>
                <ul style={navList}>
                    <li><Link to='/gallery' style={linkText}>Gallery</Link></li>
                    <li><Link to='/gadgets' style={linkText}>Gadgets</Link></li>
                    <li><Link to='/home' ><img src={require('../../images/IMG_1276.jpg')} height={height * .1} width={width * .4} /></Link></li>
                    <li><Link to='/faq' style={linkText}>FAQ</Link></li>
                    <li><Link to='/contact' style={linkText}>Contact</Link></li>
                </ul>
            </div>
        )
    }

}
