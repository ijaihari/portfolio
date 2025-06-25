import '../styles/certificates.scss';
import { PiCertificateFill } from "react-icons/pi";
import { certificates } from '../data/certificates';

const handleClick = (url) => {
  if (url) window.open(url, '_blank');
};

function Certificates() {
  return (
    <div className="section scroll-offset" id='achiev'>
      <h1 className="title">Achievements & Certifications</h1>
      <section className="cert-section">
        {certificates.map((cert, index) => (
          <section className="cert-container" key={index}>
            <section className="thumbnail">
              <img className="cert-thumbnail" src={cert.thumbnail} alt={cert.certName} />
            </section>

            <section className="cert-title">
              <h4>{cert.certName}</h4>
            </section>

            <section className="cert-issuer">
              <p>{cert.organization} • {cert.issued}</p>
            </section>

            <section className="cert-links">
              <button className="cert-link-btn" onClick={() => handleClick(cert.certLink)}>
               <PiCertificateFill /> View Credentials
              </button>
            </section>
          </section>
        ))}
      </section>
    </div>
  );
}

export default Certificates;
