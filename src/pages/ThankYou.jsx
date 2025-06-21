import '../styles/thankyou.scss';
import { Link, useLocation } from 'react-router-dom';

function ThankYou() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const name = query.get("name");

  return (
    <div className="thankyou-section scroll-offset">
      <section className="thankyou-wrapper">
        <h1 className="title">Thank You{name ? `, ${name}` : ''}!</h1>
        <p>Your message has been successfully sent. I will get back to you soon.</p>
        <Link to="/" className="home-button">Back to Home</Link>
      </section>
    </div>
  );
}

export default ThankYou;
