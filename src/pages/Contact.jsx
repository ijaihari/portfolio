import '../styles/contact.scss';
import { FaLinkedin, FaGithub,FaInstagram, FaXTwitter } from "react-icons/fa6";

function Contact() {

    return (
        <div className="section scroll-offset" id="contact">
            <h1 className="title">Let's Connect !</h1>
            <section className="contact-wrapper">

                <section className="social-links">
                    <section className="reachout-wrapper">
                        <h3>Reach Out</h3>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sjaiharinataraj@gmail.com" target="_blank"><p>Email:
                            sjaiharinataraj@gmail.com</p>
                        </a>
                        <p>Phone: 9843273540</p>
                        <div className='contact-btn'>
                            <a
                                href="https://twitter.com/messages/compose?recipient_id=1477817555188211712"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="x-send">Message Me on <FaXTwitter /></button>
                            </a>
                        </div>


                    </section>
                    <section className="social-wrapper">
                        <h3>Social</h3>
                        <section className="social-links">
                            <a href="https://www.linkedin.com/in/ijaihari/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://github.com/ijaihari" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href="https://instagram.com/ijaihari" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://x.com/ijaihari" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                        </section>
                    </section>

                </section>

                <section className="message">
                    <h3>Send a message</h3>
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                    >
                        <input type="hidden" name="access_key" value="43f8ee79-e6d0-43b2-a0d9-245a0546b9e1" />
                        <input type="hidden" name="redirect" value="https://jaihari.dev/thankyou" />
                        <input type="hidden" name="subject" value="New message from portfolio" />


                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="from_name" required placeholder='Tony Stark' />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required placeholder='tony@starkind.com' />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="4" required placeholder='Enter your message'></textarea>

                        <input type="submit" value="Send" />
                    </form>
                </section>
            </section>
        </div>
    );
}

export default Contact;
