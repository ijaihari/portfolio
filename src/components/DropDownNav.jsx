import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import '../styles/dropdown.scss';

function DropDownNav({ onClose }) {
  const menuRef = useRef(null);

  // ✅ Click outside detection
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // ✅ Scroll handler
  const handleScroll = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className="dropdown-menu" ref={menuRef}>
      <a href="#hero" onClick={(e) => handleScroll(e, '#hero')}>Home</a>
      <a href="#about" onClick={(e) => handleScroll(e, '#about')}>About</a>
      <a href="#skills" onClick={(e) => handleScroll(e, '#skills')}>Skills</a>
      <a href="#projects" onClick={(e) => handleScroll(e, '#projects')}>Projects</a>
      <a href="#achiev" onClick={(e) => handleScroll(e, '#achiev')}>Achievements</a>
      <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
    </div>,
    document.body
  );
}

export default DropDownNav;
