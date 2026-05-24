import irinaLogo from "../assets/irina-logo.svg";
import "./AppHeader.css";

const AppHeader: React.FC = () => {
  return (
    <div className="app-header">
      <img src={irinaLogo} alt="IRINA" className="header-logo-img" />
      <div className="header-divider" />
      <div className="header-text">
        <h1>UAIC International</h1>
        <p>Alexandru Ioan Cuza University · Iași</p>
      </div>
      <div className="header-badge">INT'L STUDENTS</div>
    </div>
  );
};

export default AppHeader;