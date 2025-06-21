import { useState, useRef, useEffect } from 'react';
import { CgMenuHotdog } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import '../styles/header.scss';

function Header() {
  const [dropmenu, setDropmenu] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
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
    <section className="header">
      <section className="logo">
        <a href="#">
          <span><img src="/logos/J.svg" alt="logo" /></span>
        </a>
      </section>

      {/* Desktop Nav */}
      <section className="navbar">
        <a href="#hero"><p>Home</p></a>
        <a href="#about"><p>About</p></a>
        <a href="#skills"><p>Skills</p></a>
        <a href="#projects"><p>Projects</p></a>
        <a href="#achiev"><p>Achievements</p></a>
        <a href="#contact"><p>Contact</p></a>
      </section>

      {/* Single Toggle Icon */}
      <button className="sandmenu" onClick={() => setDropmenu(!dropmenu)}>
        {dropmenu ? <IoClose /> : <CgMenuHotdog />}
      </button>

      {/* Dropdown */}
      {dropmenu && (
        <div className="dropdown-menu" ref={dropdownRef}>
          <a href="#hero" onClick={() => setDropmenu(false)}>Home</a>
          <a href="#about" onClick={() => setDropmenu(false)}>About</a>
          <a href="#skills" onClick={() => setDropmenu(false)}>Skills</a>
          <a href="#projects" onClick={() => setDropmenu(false)}>Projects</a>
          <a href="#achiev" onClick={() => setDropmenu(false)}>Achievements</a>
          <a href="#contact" onClick={() => setDropmenu(false)}>Contact</a>
        </div>
      )}
    </section>
  );
}

export default Header;
