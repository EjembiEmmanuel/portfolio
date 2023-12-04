import { useState, useEffect } from "react";
import {
    NavLink,
} from "react-router-dom"
import styles from '../scss/Navbar.module.scss'


const Navbar = () => {
    const [navbarColor, setNavbarColor] = useState(false);

    const changeNavbarColor = () => {
        if(window.scrollY >= 80) {
            setNavbarColor(true);
        } else {
            setNavbarColor(false);
        }
    };

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
            </div>
            <div id={styles['links-container']}>
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
                    <NavLink className={styles['link']} href="">Resume</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar