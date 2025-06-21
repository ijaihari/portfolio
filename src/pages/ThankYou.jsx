import '../styles/thankyou.scss';
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div className="thankyou-section scroll-offset">
      <section className="thankyou-wrapper">
        <h1 className="title">Thank You!</h1>
        <p>Your message has been successfully sent. <br />I will get back to you soon.</p>
        <Link to="/" className="home-button">Back to Home</Link>
      </section>
    </div>
  );
}

export default ThankYou;
