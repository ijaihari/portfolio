import '../styles/about.scss'
function About() {
    return (
        <div className="section scroll-offset" id='about'>
            <h1 className="title">Meet the Developer</h1>
            <section className='about-wrapper'>
                <section className='me'>
                    <section className='status'>
                        <img className='status__image' src="/about/profile.jpg" alt="" />
                        <div className='status__content'>
                            {/* <p>FED @ CompanyName</p>
                            <p>July 10 - Present</p> */}
                            <p>Status: Open to Work</p>
                            <p>Avail. : <span>Immediate</span></p>
                        </div>
                    </section>
                    <section className='myvalue'>
                        <h3>How I Add Value</h3>
                        <hr />
                        <ul>
                            <li>Building Responsive Web Applications</li>
                            <li>Implement Agile and Scrum methodologies for productive project management</li>
                            <li>Building Responsive Web Applications</li>
                        </ul>
                    </section>
                </section>
                <section className='experience'>
                    {/* <section className='work'>
                        <h3 className='work__title'>Experience</h3>
                        <div className='work__job-wrapper'>
                            <div className='role'>
                                <span>
                                    <h3>Front-End Developer </h3>
                                    <p>CompanyName <span className='time'>[23 Jul - Now]</span></p>
                                </span>

                            </div>
                            <div className='honor'>
                                <ul>
                                    <p>Honor & Awards</p>
                                    <li>Completed One Year</li>
                                </ul>
                            </div>
                        </div>
                    </section> */}
                    <section className='edu'>

                        <div className='edu__details'>
                            <h3 className='edu__title'>Education</h3>
                            <hr />
                            <h3 className='deg'>Bachelor of Engineering EEE (2024) / CGPA<span className='highlight'> 8.82 (FWD)</span></h3>
                            <p>Anna University, AAA college of Engineering & Technology</p>
                            <ul>
                                <p className='acti'>Activites</p>
                                <li>Student Representative</li>
                                <li>IIC Student Innovation coordinator</li>
                                <li>President of Department Association</li>
                            </ul>

                            <ul>
                                <p className='ach'>Achievements</p>
                                <li>Secured 1st Rank in III & IV Semester Examinations of the Anna University held in Academic year 2022 - 2023</li>
                            </ul>
                        </div>
                    </section>

                </section>
            </section>
        </div>);
}

export default About;