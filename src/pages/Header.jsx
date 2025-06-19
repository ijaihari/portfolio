import { useState } from 'react';
import '../styles/header.scss'
function Header() {
    const [dropmenu, setDropmenu] = useState(false);
    return (
        <section className="header">
            <section className="logo">
                <a href="">
                    <span>
                        <img src="/J.svg" alt="" />
                    </span>
                </a>
            </section>
            {/*  {
                dropmenu && <section className='sandwitch'>

                </section>
            } */}
            <section className="navbar">
                <a href="#home"><p>Home</p></a>
                <a href="#about"><p>About</p></a>
                <a href="#skills"><p>Skills</p></a>
                <a href="#pro"><p>Projects</p></a>
                <a href="#achiev"><p>Achievements</p></a>
                <a href="#contact"><p>Contact</p></a>
            </section>
        </section>
    );
}

export default Header;