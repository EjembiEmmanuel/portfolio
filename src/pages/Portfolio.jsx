import Project from "../components/Project"
import projects from "../projects"
import styles from "../scss/Portfolio.module.scss"


const Portfolio = () => {

    return (
        <div id={styles['portfolio-page']}>
            {projects.map((project, index) => (
                <Project 
                    key={project.title}
                    index={index}
                    projectImg={project.img} 
                    projectTitle={project.title} 
                    projectDesc={project.desc} 
                    projectTools={project.tools} 
                    projectLinks={project.links}
                /> 
            ))}
        </div>
    )
}

export default Portfolio