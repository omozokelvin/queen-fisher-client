import { Link } from 'react-router-dom';
import SiteLogo from '../SiteLogo';
import classes from './Header.module.css';

export default function Header() {
  return (
    <header className={classes['nav-section']}>
      <nav className="container">
        <SiteLogo />

        <ul>
          <li>
            <a href="" className={classes.active}>
              Home
            </a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>

        <div className={classes.action}>
          <Link to="/auth/login">Login</Link>
          <Link to="/auth/signup" className="btn-primary">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
