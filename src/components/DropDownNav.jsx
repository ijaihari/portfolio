import '../styles/dropdown.scss';

function DropDownNav({ onClose }) {
  return (
    <div className="dropdown-menu">
      <a href="#hero" onClick={onClose}>Home</a>
      <a href="#about" onClick={onClose}>About</a>
      <a href="#skills" onClick={onClose}>Skills</a>
      <a href="#projects" onClick={onClose}>Projects</a>
      <a href="#achiev" onClick={onClose}>Achievements</a>
      <a href="#contact" onClick={onClose}>Contact</a>
    </div>
  );
}

export default DropDownNav;
