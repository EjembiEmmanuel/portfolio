import {
    NavLink,
} from "react-router-dom"
import styles from '../scss/Navbar.module.scss'


const Navbar = () => {
    const addNavClass = (isActive, isPending) => {
        if (isActive) {
            return (styles['link'], styles['active'])
        } else if (isPending) {
            return (styles['link'], styles['pending'])
        } else {
            return styles['link']
        }
    }

    return (
        <nav>
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
                    <NavLink className={styles['link']} to="">Projects</NavLink>
                    <NavLink className={styles['link']} href="">Resume</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar