import '../styles/contact.scss';
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";

function Contact() {
    return (
        <div className="section" id='contact'>
            <h1 className="title">Let's Connect !</h1>
            <section className="contact-wrapper">
                <section className='social-links'>
                    <section className='reachout-wrapper'>
                        <h3>Reach Out</h3>
                        <p>Email: iamjaihari@gmail.com</p>
                        <p>Phone: 9843273540</p>
                    </section>
                    <section className='social-wrapper'>
                        <h3>Social</h3>
                        <section className='social-links'>
                            <a href="https://www.linkedin.com/in/ijaihari/" target='_blank'><FaLinkedin /></a>
                            <a href="https://github.com/ijaihari" target='_blank'><FaGithub /></a>
                            <a href="https://x.com/ijaihari" target='_blank'><FaXTwitter /></a>
                            <a href="https://www.instagram.com/ijaihari" target='_blank'><FaInstagram /></a>
                        </section>
                    </section>
                </section>
                <section className='message'>
                    <h3>Message</h3>
                    <form action="">
                        <label htmlFor="">Name</label>
                        <input type="text" />
                        <label htmlFor="">Email</label>
                        <input type="text" />
                        <label htmlFor="">Message</label>
                        <textarea name="" id=""></textarea>
                        <input type="submit" />
                    </form>


                </section>
            </section>
        </div>
    );
}

export default Contact;