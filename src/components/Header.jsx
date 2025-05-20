function Header() {
    return (
        <div className="header">
            <section className="logo">
                <a href=""><p>PORTFOLIO </p></a>
            </section>
            <section className="navbar">
                <a href="#home"><p>Home</p></a>
                <a href="#home"><p>About</p></a>
                <a href="#home"><p>Skills</p></a>
                <a href="#home"><p>Projects</p></a>
                <a href="#home"><p>Achievements</p></a>
            </section>
            <section className="navlinks">
                <button><a href="#contact">Contact</a></button>
            </section>
        </div>
    );
}

export default Header;