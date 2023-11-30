import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import profileImg from "../assets/img/profile-img.jpg"
import gitHubIcon from "../assets/icons/github.svg"
import xIcon from "../assets/icons/x-twitter.svg"
import linkedInIcon from "../assets/icons/linkedin.svg"
import emailIcon from "../assets/icons/envelope-solid.svg"
import styles from "../scss/Home.module.scss"


const Home = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);

    return (
        <>
            <Particles
                id="tsparticles"
                className={styles['tsparticles']}
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#1b1b1b",
                        },
                    },
                    fpsLimit: 120,
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 50,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div id={styles['home-page']}>
                <div id={styles['personal-details']}>
                    <img id={styles['profile-img']} src={profileImg} alt="Profile Image" />
                    <h1 id={styles['name']}>Ejembi Emmanuel</h1>
                    <p id={styles['job']}>Front-End Web Developer</p>
                    <div id={styles['links']}>
                        <a className={styles['link']} href="https://github.com/EjembiEmmanuel">
                            <img src={gitHubIcon} alt="GitHub Icon" />
                        </a>
                        <a className={styles['link']} href="https://twitter.com/ejembioche50">
                            <img src={xIcon} alt="X Icon" />
                        </a>
                        <a className={styles['link']} href="https://www.linkedin.com/in/emmanuel-ejembi-2a52b6192/">
                            <img src={linkedInIcon} alt="LinkedIn Icon" />
                        </a>
                        <a className={styles['link']} href="mailto:ejembioche50@gmail.com">
                            <img src={emailIcon} alt="Email Icon" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home