import EmblaCarousel from "../components/EmblaCarousel"
import skills from "../skills"
import styles from "../scss/About.module.scss"

  

const About = () => {

    const OPTIONS = { slidesToScroll: 2, containScroll: 'trimSnaps',loop: true, dragFree: true }
    const SLIDE_COUNT = skills.length
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <>
            <div id={styles['about-page']}>
                <div id={styles['about']}>
                    <p>Hi there! I&apos;m <span>Ejembi Emmanuel</span>, a passionate <span>web developer</span> based in <span>Nigeria.</span></p>
                    <p>Throughout childhood, I was always fascinated by technology. Whether it was jailbreaking my first android phone, installing custom ROMs on my Android phones (which almost resulted in them becoming inoperable), or modding games, these activities were instrumental in enhancing my ability to solve problems.</p>
                    <p>In my spare time, I enjoy learning new technologies and exploring the latest web development trends. Im&apos; always eager to learn and grow, and I&apos;m currently delving deeper into the world of Front-End Web Development.</p>
                    <p>Feel free to browse through my portfolio to see the work I&apos;ve done, and don&apos;t hesitate to get in touch if you&apos;d like to collaborate on a project or learn more about my skills and experience.</p>
                </div>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} skills={skills} />
            </div>
        </>
    )
}

export default About