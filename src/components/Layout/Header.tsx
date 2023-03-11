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
          <a href="">Login</a>
          <a href="" className="btn-primary">
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}
