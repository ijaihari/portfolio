import { projects } from '../data/projects';
import '../styles/hero.scss';

function Hero() {
    const latestProject = projects[0].preview;
    return (
        <div className="hero-section">
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
                    <p>I engineer responsive, accessible web applications that ensure <br className='mobile-break' />seamless user experiences and  handle dynamic data flows efficiently</p>
                </section>
                <section className="hero-links">
                    <button><i class="fa-solid fa-file"></i> Resume</button>
                    <button><i class="fa-brands fa-linkedin"></i> LinkedIn</button>
                    <button><i class="fa-brands fa-github"></i> GitHub</button>
                </section>
            </div>
        </div>
    );
}

export default Hero;