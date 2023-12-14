import { useState, useEffect } from "react";
import {
    NavLink,
} from "react-router-dom"
import { useMediaQuery } from "react-responsive";
import menuIcon from '../assets/icons/menu.svg'
import styles from '../scss/Navbar.module.scss'


const Navbar = () => {
    const [navbarColor, setNavbarColor] = useState(false);
    const [isNavActive, setNavActive] = useState(false)
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)'})
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const changeNavbarColor = () => {
        if(window.scrollY >= 80) {
            setNavbarColor(true);
        } else {
            setNavbarColor(false);
        }
    };

    const toggleNav = () => {
        setNavActive(!isNavActive)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);

        return () => {
            window.removeEventListener('scroll', changeNavbarColor);
        };
    }, []);

    const addNavClass = (isActive, isPending) => {
        if (isActive) {
            return `${styles['link']} ${styles['active']}`
        } else if (isPending) {
            return `${styles['link']} ${styles['pending']}`
        } else {
            return styles['link']
        }
    }

    return (
        <nav style={{boxShadow: navbarColor ? '5px 5px 15px rgba(0,0,0,0.3)' : ''}}>
            <div id={styles['logo-container']}>
                <p id={styles['logo-text']}>Oche Codes</p>
                {isTabletOrMobile && (
                    <button id={styles['menu']} onClick={toggleNav}>
                        <img src={menuIcon} alt="Menu icon" />
                    </button>
                )}
            </div>
            <div id={styles['links-container']}>
                {isDesktopOrLaptop && (
                    <div id={styles['links']}>
                        <NavLink className={({ isActive, isPending }) =>
                            addNavClass(isActive, isPending)
                        } to='/'>Home</NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            addNavClass(isActive, isPending)
                        } to='about'>About</NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            addNavClass(isActive, isPending)
                        } to='portfolio'>Portfolio</NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            addNavClass(isActive, isPending)
                        } to='resume'>Resume</NavLink>
                    </div>
                )}
                {isNavActive && (
                    <div id={styles['links']}>
                        <NavLink onClick={() => setNavActive(false)} className={({ isActive, isPending }) =>
                            addNavClass(isActive, isPending)
                        } to='/'>Home</NavLink>
                        <NavLink onClick={() => setNavActive(false)} className={({ isActive, isPending }) =>
                            addNavClass(isActive, isPending)
                        } to='about'>About</NavLink>
                        <NavLink onClick={() => setNavActive(false)} className={({ isActive, isPending }) =>
                            addNavClass(isActive, isPending)
                        } to='portfolio'>Portfolio</NavLink>
                        <NavLink onClick={() => setNavActive(false)} className={({ isActive, isPending }) =>
                            addNavClass(isActive, isPending)
                        } to='resume'>Resume</NavLink>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar