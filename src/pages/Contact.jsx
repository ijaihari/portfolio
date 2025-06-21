import { useEffect } from 'react';
import '../styles/contact.scss';
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";

function Contact() {

    useEffect(() => {
        const nameInput = document.getElementById("name");
        const redirectInput = document.getElementById("redirect");

        if (nameInput && redirectInput) {
            nameInput.addEventListener("input", () => {
                const nameValue = nameInput.value.trim();
                redirectInput.value = `https://ijaihari.vercel.app/thankyou?name=${encodeURIComponent(nameValue)}`;
            });
        }
    }, []);

    return (
        <div className="section scroll-offset" id="contact">
            <h1 className="title">Let's Connect !</h1>
            <section className="contact-wrapper">

                <section className="social-links">
                    <section className="reachout-wrapper">
                        <h3>Reach Out</h3>
                        <p>Email: sjaiharinataraj@gmail.com</p>
                        <p>Phone: 9843273540</p>
                    </section>
                    <section className="social-wrapper">
                        <h3>Social</h3>
                        <section className="social-links">
                            <a href="https://www.linkedin.com/in/ijaihari/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://github.com/ijaihari" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href="https://x.com/ijaihari" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                            <a href="https://www.instagram.com/ijaihari" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        </section>
                    </section>
                </section>

                {/* Right Side - Contact Form */}
                <section className="message">
                    <h3>Message</h3>
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                    >

                        <input type="hidden" name="access_key" value="43f8ee79-e6d0-43b2-a0d9-245a0546b9e1" />
                        <input type="hidden" name="redirect" value="https://ijaihari.vercel.app/thankyou" />
                        <input type="hidden" name="subject" value="New message from portfolio" />


                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="from_name" required />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="4" required></textarea>

                        <input type="submit" value="Send" />
                    </form>
                </section>
            </section>
        </div>
    );
}

export default Contact;
