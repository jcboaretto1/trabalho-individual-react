// components/Navbar/navbar.jsx
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navMenu}>
        <Link to="/" className={styles.navLogo}>
          Home
        </Link>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <Link to="/questao01" className={styles.navLink}>
              Questão 01
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/questao02" element={styles.navLink}>
              Questão 02
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/questao03" className={styles.navLink}>
              Questão 03
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
