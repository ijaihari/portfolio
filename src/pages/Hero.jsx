import '../styles/hero.scss';
import { LuArrowUpRight } from "react-icons/lu";

function Hero() {
    return (
        <div className="hero-section">
            <div className="hero-wrapper">
                <section className='update-tab'>
                    <section className='btn-wrapper'>
                        <button className="gradient-button">
                            <p>Checkout my latest project&nbsp;</p>
                            <LuArrowUpRight />
                        </button>
                    </section>
                </section>
                <section className="greetings">
                    <h3>'Hello World'</h3>
                    <h1>I'm Jai Hari Nataraj</h1>
                    <h2>A Front-End Engineer</h2>
                </section>
                <section className="about">
                    <p>I engineer responsive, accessible web applications that ensure <br /> seamless user experiences and  handle dynamic data flows efficiently.</p>
                </section>
                <section className="hero-links">
                    <button><i class="fa-brands fa-linkedin"></i> LinkedIn</button>
                    <button><i class="fa-brands fa-github"></i> GitHub</button>
                    <button><i class="fa-solid fa-file"></i> Resume</button>
                </section>
            </div>
        </div>
    );
}

export default Hero;