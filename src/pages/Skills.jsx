import '../styles/skills.scss';
import { skills } from "../data/skills";

function Skills() {
    return (
        <div className="section">
            <h1 className="title">My Tech Stack</h1>
            <section className="skill-container">
                {skills.length > 0 ? (
                    skills.map((skill, index) => {
                        const SkillIcon = skill.si;
                        return (
                            <span key={index} className="skill-tab">
                                <SkillIcon />
                                <p>{skill.text}</p>
                            </span>
                        );
                    })
                ) : (
                    <p>No Skills</p>
                )}
            </section>
        </div>
    );
}

export default Skills;
