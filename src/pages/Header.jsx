import { useState } from 'react';
import { CgMenuHotdog } from "react-icons/cg";
import '../styles/header.scss'
function Header() {
    const [dropmenu, setDropmenu] = useState(true);
    return (
        <section className="header">
            <section className="logo">
                <a href="">
                    <span>
                        <img src="/logos/J.svg" alt="" />
                    </span>
                </a>
            </section>
            <section className="navbar">
                <a href="#hero"><p>Home</p></a>
                <a href="#about"><p>About</p></a>
                <a href="#skills"><p>Skills</p></a>
                <a href="#projects"><p>Projects</p></a>
                <a href="#achiev"><p>Achievements</p></a>
                <a href="#contact"><p>Contact</p></a>
            </section>
            <button className='sandmenu' onClick={() => setDropmenu(!dropmenu)}><CgMenuHotdog /></button>


        </section>
    );
}

export default Header;