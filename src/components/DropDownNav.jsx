import ReactDOM from 'react-dom';
import '../styles/dropdown.scss'
function Dropdown({ onClose }) {
    return ReactDOM.createPortal(
        <div className="dropdown-menu">
            <a href="#hero" onClick={onClose}>Home</a>
            <a href="#about" onClick={onClose}>About</a>
            <a href="#skills" onClick={onClose}>Skills</a>
            <a href="#projects" onClick={onClose}>Projects</a>
            <a href="#achiev" onClick={onClose}>Achievements</a>
            <a href="#contact" onClick={onClose}>Contact</a>
        </div>,
        document.body
    );
}

export default Dropdown;
