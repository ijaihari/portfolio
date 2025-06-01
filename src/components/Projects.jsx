import '../styles/project.scss';
import { SlGlobe } from "react-icons/sl";
import { SiGithub } from "react-icons/si";
import { FaVideo } from "react-icons/fa";
function Projects() {
    return (
        <div className="sections">
            <h1 className="title">Projects</h1>
            <section className="pro-section">

                <section className="pro-container">
                    <button className='video-preview'><FaVideo /></button>
                    <img className='pro-thumbnail' src="https://res.cloudinary.com/du6eewwsa/image/upload/fl_preserve_transparency/v1748622934/ROAS_Insight_Suite_zgpllo.jpg?_s=public-apps" alt='roas-insight-suite' />
                    <section className='pro-tech-stack'>
                        <span className='pro-tech-container'>React</span>
                        <span className='pro-tech-container'>Redux ToolKit</span>
                        <span className='pro-tech-container'>Router</span>
                        <span className='pro-tech-container'>Scss</span>
                    </section>
                    <section className='pro-about'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi non cum id necessitatibus expedita neque quod, eum eaque, quasi nobis saepe mollitia, sed explicabo reprehenderit minus consectetur facere veritatis quae?</p>

                    </section>
                    <section className='pro-links'>
                        <button className='pro-link-btn'><SlGlobe /> Live preview</button>
                        <button className='pro-link-btn'><SiGithub /></button>
                    </section>
                </section>

                <section className="pro-container">
                    <button className='video-preview'><FaVideo /></button>
                    <img className='pro-thumbnail' src="https://res.cloudinary.com/du6eewwsa/image/upload/fl_preserve_transparency/v1748622934/ROAS_Insight_Suite_zgpllo.jpg?_s=public-apps" alt='roas-insight-suite' />
                    <section className='pro-tech-stack'>
                        <span className='pro-tech-container'>React</span>
                        <span className='pro-tech-container'>Redux ToolKit</span>
                        <span className='pro-tech-container'>Router</span>
                        <span className='pro-tech-container'>Scss</span>
                    </section>
                    <section className='pro-about'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi non cum id necessitatibus expedita neque quod, eum eaque, quasi nobis saepe mollitia, sed explicabo reprehenderit minus consectetur facere veritatis quae?</p>

                    </section>
                    <section className='pro-links'>
                        <button className='pro-link-btn'><SlGlobe /> Live preview</button>
                        <button className='pro-link-btn'><SiGithub /></button>
                    </section>
                </section>

                <section className="pro-container">
                    <button className='video-preview'><FaVideo /></button>
                    <img className='pro-thumbnail' src="https://res.cloudinary.com/du6eewwsa/image/upload/fl_preserve_transparency/v1748622934/ROAS_Insight_Suite_zgpllo.jpg?_s=public-apps" alt='roas-insight-suite' />
                    <section className='pro-tech-stack'>
                        <span className='pro-tech-container'>React</span>
                        <span className='pro-tech-container'>Redux ToolKit</span>
                        <span className='pro-tech-container'>Router</span>
                        <span className='pro-tech-container'>Scss</span>
                    </section>
                    <section className='pro-about'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi non cum id necessitatibus expedita neque quod, eum eaque, quasi nobis saepe mollitia, sed explicabo reprehenderit minus consectetur facere veritatis quae?</p>

                    </section>
                    <section className='pro-links'>
                        <button className='pro-link-btn'><SlGlobe /> Live preview</button>
                        <button className='pro-link-btn'><SiGithub /></button>
                    </section>
                </section>


            </section>

        </div>
    );
}

export default Projects;