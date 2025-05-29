import { SiHtml5, SiCss3, SiJavascript, SiReact, SiRedux, SiReactrouter, SiTailwindcss, SiSass, SiGit, SiGithub, SiFigma, SiAdobeillustrator } from "react-icons/si";
function Skills() {
    return (
        <div className="sections">
            <h1 className="title">My Tech Stack</h1>
            <section className="skill-container">
                <span className="skill-tab"><SiHtml5 /><p>HTML5</p></span>
                <span className="skill-tab"><SiCss3 /><p>CSS3</p></span>
                <span className="skill-tab"><SiJavascript /><p>Javascript ES6+</p></span>
                <span className="skill-tab"><SiReact /><p>React.js</p></span>
                <span className="skill-tab"><SiRedux /><p>Redux ToolKit</p></span>
                <span className="skill-tab"><SiReactrouter /><p>React Router</p></span>
                <span className="skill-tab"><SiSass /><p>Sass</p></span>
                <span className="skill-tab"><SiTailwindcss /><p>Tailwind CSS</p></span>
                <span className="skill-tab"><SiGit /><p>Git</p></span>
                <span className="skill-tab"><SiGithub /><p>GitHub</p></span>
                <span className="skill-tab"><SiFigma /><p>Figma</p></span>
                <span className="skill-tab"><SiAdobeillustrator /><p>Adobe Illustrator</p></span>
            </section>
        </div>
    );
}

export default Skills;