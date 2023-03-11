import FacebookIcon from '../../../public/icons/facebook.svg';
import GoogleIcon from '../../../public/icons/google.svg';
import LinkedinIcon from '../../../public/icons/linkedin.svg';
import TwitterIcon from '../../../public/icons/twitter.svg';
import SiteLogo from '../SiteLogo';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--grey-100)',
        paddingBlock: '48px',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ marginBottom: '40px', display: 'inline-block' }}>
            <SiteLogo />
          </div>

          <p
            style={{
              color: 'var(--main-text)',
              fontSize: '0.875rem',
              lineHeight: '22px',
              letterSpacing: '-0.252778px',
            }}
          >
            © 2023 All rights reserved
          </p>
        </div>

        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            columnGap: '32px',
            color: 'var(--main-text)',
          }}
        >
          <li>
            <a href="" className="body-2">
              Home
            </a>
          </li>
          <li>
            <a href="" className="body-2">
              About
            </a>
          </li>
          <li>
            <a href="" className="body-2">
              FAQ
            </a>
          </li>
        </ul>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              columnGap: '15px',
              alignItems: 'center',
              marginBottom: '31px',
            }}
          >
            <li>
              <a href="">
                <img src={FacebookIcon} alt="facebook icon" />
              </a>
            </li>

            <li>
              <a href="">
                <img src={TwitterIcon} alt="Twitter icon" />
              </a>
            </li>

            <li>
              <a href="">
                <img src={LinkedinIcon} alt="Linkedin icon" />
              </a>
            </li>

            <li>
              <a href="">
                <img src={GoogleIcon} alt="Google icon" />
              </a>
            </li>
          </ul>

          <p className="body-2">English version</p>
        </div>
      </div>
    </footer>
  );
}
