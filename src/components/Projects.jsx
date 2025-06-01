import '../styles/project.scss';
import { SlGlobe } from "react-icons/sl";
import { SiGithub } from "react-icons/si";
import { FaVideo } from "react-icons/fa";
import { projects } from '../data/projects';

const handleClick = (url) => {
    if (url) window.open(url, '_blank');
};

function Projects() {
    return (
        <div className="sections">
            <h1 className="title">Projects</h1>
            <section className="pro-section">
                {projects.map((project, index) => (
                    <section className="pro-container" key={index}>
                        <button
                            className="video-preview"
                            onClick={() => handleClick(project.video)}
                            disabled={!project.video}
                            title={project.video ? "Watch video preview" : "No video available"}
                        >
                            <FaVideo />
                        </button>

                        <img className="pro-thumbnail" src={project.thumbmail} alt={project.proName} />

                        <section className="pro-tech-stack">
                            {project.techStack.map((tech, i) => (
                                <span className="pro-tech-container" key={i}>{tech}</span>
                            ))}
                        </section>

                        <section className="pro-about">
                            <p>{project.about}</p>
                        </section>

                        <section className="pro-links">
                            <button className="pro-link-btn" onClick={() => handleClick(project.preview)}>
                                <SlGlobe /> Live preview
                            </button>
                            <button className="pro-link-btn" onClick={() => handleClick(project.github)}>
                                <SiGithub />
                            </button>
                        </section>
                    </section>
                ))}
            </section>
        </div>
    );
}

export default Projects;
