import { projects } from '../data/projects';
import '../styles/hero.scss';
import { FaFile, FaLinkedin, FaGithub } from "react-icons/fa6";

function Hero() {

    const latestProject = projects[1].preview;
    return (
        <div className="hero-section scroll-offset" id='hero'>
            <div className="hero-wrapper">
                <section className='update-tab'>
                    <section className='btn-wrapper'>
                        <a href={latestProject} target='_blank'>
                            <button className="gradient-button">
                                Checkout my latest project &nbsp;
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </button>
                        </a>
                    </section>
                </section>
                <section className="greetings">
                    <h3>'Hello World'</h3>
                    <h1>I'm JAI HARI NATARAJ</h1>
                    <h2>A Front-End Developer</h2>
                </section>
                <section className="about">
                    <p>I develop code that looks good and works even better.</p>
                </section>
                <section className="hero-links">
                    <a href="/pdfs/JaiHari-FrontEnd-Resume.pdf" target='_blank'><button><FaFile /> Resume</button></a>
                    <a href="https://www.linkedin.com/in/ijaihari/" target='_blank'><button><FaLinkedin /> LinkedIn</button></a>
                    <a href="https://github.com/ijaihari" target='_blank'><button><FaGithub /> GitHub</button></a>
                </section>
            </div>
        </div>
    );
}

export default Hero;