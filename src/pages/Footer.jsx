import '../styles/footer.scss'
function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer-container">
            <section className="footer-wrapper">
                <p>Designed & Developed by <a className='profile-link'target='_blank' href="https://www.linkedin.com/in/ijaihari/">Jai Hari Nataraj </a>
                    <br className='footer-break' /> &copy; {year} All Rights Reserved</p>
            </section>
        </footer>
    );
}

export default Footer;