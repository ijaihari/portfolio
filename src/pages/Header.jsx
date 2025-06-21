import { useState, useRef, useEffect } from 'react';
import { CgMenuHotdog } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import '../styles/header.scss';
import DropDownNav from '../components/DropDownNav';

function Header() {
    const [dropmenu, setDropmenu] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropmenu(false);
            }
        };

        if (dropmenu) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropmenu]);

    return (
        <section className="header" ref={dropdownRef}>
            <section className="logo">
                <a href="#">
                    <span><img src="/logos/J.svg" alt="logo" /></span>
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

            <button className="sandmenu" onClick={() => setDropmenu(!dropmenu)}>
                {dropmenu ? <IoClose /> : <CgMenuHotdog />}
            </button>

            {dropmenu && <DropDownNav onClose={() => setDropmenu(false)} />}
        </section>
    );
}

export default Header;
