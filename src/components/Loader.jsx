import styles from "../scss/Loader.module.scss"


const Loader = () => {
    return (
        <div id={styles['loader']}>
            <div id={styles["progress-bar"]}></div>
        </div>
    )
}

export default Loader