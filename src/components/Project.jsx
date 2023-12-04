import PropTypes from 'prop-types'
import gitHubIcon from "../assets/icons/github.svg"
import laptopIcon from "../assets/icons/laptop.svg"
import styles from "../scss/Project.module.scss"


const Project = (props) => {
    const { index, projectImg, projectTitle, projectDesc, projectTools, projectLinks } = props

    return (
        <div className={index % 2 === 0 ? styles['project'] : styles['project-reverse']}>
            <div className={index % 2 === 0 ? styles['img-area'] : styles['img-area-reverse']}>
                <img src={projectImg} alt="Project Image" />
            </div>
            <div className={index % 2 === 0 ? styles['details-area'] : styles['details-area-reverse']}>
                <div className={styles['project-title']}>
                    <h2>{projectTitle}</h2>
                </div>
                <div className={styles['project-desc']}>
                    <p>{projectDesc}</p>
                    <hr />
                    <p>Built using {projectTools}</p>
                </div>
                <div className={styles['project-links']}>
                    <button>
                        <a href={projectLinks.site} target='_blank' rel='noreferrer'>LIVE SITE</a>
                        <img src={laptopIcon} alt="Arrow Icon" />
                    </button>
                    {projectLinks.github && (
                        <button>
                            <a href={projectLinks.github} target='_blank' rel='noreferrer'>GITHUB</a>
                            <img src={gitHubIcon} alt="Arrow Icon" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

Project.propTypes = {
    index: PropTypes.number,
    projectImg: PropTypes.string,
    projectTitle: PropTypes.string,
    projectDesc: PropTypes.string,
    projectTools: PropTypes.string,
    projectLinks: PropTypes.object
}

export default Project