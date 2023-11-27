import styles from '../scss/Navbar.module.scss'


const Navbar = () => {
    return (
        <nav>
            <div id={styles['logo-container']}>
                <p id={styles['logo-text']}>Oche Codes</p>
            </div>
            <div id={styles['links-container']}>
                <div id={styles['links']}>
                    <a className={styles['link']} href="">Home</a>
                    <a className={styles['link']} href="">About</a>
                    <a className={styles['link']} href="">Projects</a>
                    <a className={styles['link']} href="">Resume</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar