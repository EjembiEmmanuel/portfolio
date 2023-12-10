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
                    <p>Hi there! I&apos;m <span>Ejembi Emmanuel</span>, a passionate <span>Web developer</span> based in <span>Nigeria.</span></p>
                    <p>I&apos;ve over 3 years of development experience in which I&apos;ve not only learnt to code using a variety of tools and frameworks but also learnt how to solve and provide intuitive solutions to problems, communicate effectively and work in a team. I currently work with JavaScript and React.js on most of my projects.</p>
                    <p>In my spare time, I enjoy learning new technologies and exploring the latest web development trends. I&apos;m always eager to learn and grow, and I&apos;m currently delving deeper into the world of Front-End Web Development.</p>
                    <p>Feel free to browse through my portfolio to see the work I&apos;ve done, and don&apos;t hesitate to get in touch if you&apos;d like to collaborate on a project or learn more about my skills and experience.</p>
                </div>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} skills={skills} />
            </div>
        </>
    )
}

export default About