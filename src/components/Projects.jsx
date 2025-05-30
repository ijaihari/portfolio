import '../styles/project.scss';
import { SlGlobe } from "react-icons/sl";
import { SiGithub } from "react-icons/si";
function Projects() {
    return (
        <div className="sections">
            <h1 className="title">Projects</h1>
            <section className="pro-section">

                <section className="pro-container">
                    <img className='pro-thumbnail' src="https://res.cloudinary.com/du6eewwsa/image/upload/fl_preserve_transparency/v1748622934/ROAS_Insight_Suite_zgpllo.jpg?_s=public-apps" />
                    <section className='pro-tech-stack'>
                        <div className='stack-title'>Tech Stack</div> <br />
                        <span className='pro-tech-container'>React</span>
                    </section>
                    <section className='pro-about'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum voluptas veniam esse maxime repellat dolorem officiis sit. Quos atque ex iusto optio! Magnam et corrupti illum officiis odit quia!</p>
                    </section>
                    <section className='pro-links'>
                        <button className='pro-link-btn'><SlGlobe /> View preview</button>
                        <button className='pro-link-btn'><SiGithub /> GitHub</button>
                    </section>
                </section>
                <section className="pro-container">
                    <img className='pro-thumbnail' src="https://res.cloudinary.com/du6eewwsa/image/upload/fl_preserve_transparency/v1748622934/ROAS_Insight_Suite_zgpllo.jpg?_s=public-apps" />
                    <section className='pro-tech-stack'>

                        <span className='pro-tech-container'>React</span>
                    </section>
                    <section className='pro-about'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum voluptas veniam esse maxime repellat dolorem officiis sit. Quos atque ex iusto optio! Magnam et corrupti illum officiis odit quia!</p>
                    </section>
                    <section className='pro-links'>
                        <button className='pro-link-btn'><SlGlobe /> View preview</button>
                        <button className='pro-link-btn'><SiGithub /> GitHub</button>
                    </section>
                </section>
                <section className="pro-container">
                    <img className='pro-thumbnail' src="https://res.cloudinary.com/du6eewwsa/image/upload/fl_preserve_transparency/v1748622934/ROAS_Insight_Suite_zgpllo.jpg?_s=public-apps" />
                    <section className='pro-tech-stack'>
                        <span className='pro-tech-container'>React</span>
                    </section>
                    <section className='pro-about'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum voluptas veniam esse maxime repellat dolorem officiis sit. Quos atque ex iusto optio! Magnam et corrupti illum officiis odit quia!</p>
                    </section>
                    <section className='pro-links'>
                        <button className='pro-link-btn'><SlGlobe /> View preview</button>
                        <button className='pro-link-btn'><SiGithub /> GitHub</button>
                    </section>
                </section>
                <section className="pro-container">
                    <img className='pro-thumbnail' src="https://res.cloudinary.com/du6eewwsa/image/upload/fl_preserve_transparency/v1748622934/ROAS_Insight_Suite_zgpllo.jpg?_s=public-apps" />
                    <section className='pro-tech-stack'>
                        <span className='pro-tech-container'>React</span>
                    </section>
                    <section className='pro-about'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum voluptas veniam esse maxime repellat dolorem officiis sit. Quos atque ex iusto optio! Magnam et corrupti illum officiis odit quia!</p>
                    </section>
                    <section className='pro-links'>
                        <button className='pro-link-btn'><SlGlobe /> View preview</button>
                        <button className='pro-link-btn'><SiGithub /> GitHub</button>
                    </section>
                </section>






            </section>

        </div>
    );
}

export default Projects;