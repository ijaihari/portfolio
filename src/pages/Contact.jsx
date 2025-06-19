import '../styles/contact.scss';
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";

function Contact() {
    return (
        <div className="section">
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
                            <a href=""><FaLinkedin /></a>
                            <a href=""><FaGithub /></a>
                            <a href=""><FaXTwitter /></a>
                            <a href=""><FaInstagram /></a>
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