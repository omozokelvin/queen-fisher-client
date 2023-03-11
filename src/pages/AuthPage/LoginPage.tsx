import LockIcon from '../../../public/icons/lock.svg';
import MailIcon from '../../../public/icons/mail-alt.svg';
import {
  AuthCard,
  AuthLayout,
  Button,
  SiteLogo,
  TextField,
} from '../../components';

export default function LoginPage() {
  return (
    <AuthLayout>
      <SiteLogo />

      <AuthCard>
        <h1
          className="heading-2"
          style={{
            color: 'var(--darker-gray)',
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          Hi, Welcome back
        </h1>

        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '16px',
            marginBottom: '40px',
          }}
        >
          <TextField
            label="Email"
            placeholder="Type your email"
            id="email"
            name="email"
            icon={MailIcon}
            type="email"
          />

          <TextField
            label="Password"
            placeholder="Enter your password"
            id="password"
            name="password"
            icon={LockIcon}
            type="password"
          />
          <a
            href="#"
            style={{
              color: 'var(--blue-600)',
              fontSize: '0.875rem',
              marginTop: '-8px',
            }}
          >
            Forgot password?
          </a>

          <hr
            style={{
              all: 'unset',
            }}
          />
          <Button>Login</Button>
        </form>

        <p
          style={{
            textAlign: 'center',
            color: 'var(--main-text)',
            fontSize: '0.875rem',
          }}
        >
          Don’t have an account?{' '}
          <a
            href="#"
            style={{
              color: 'var(--orange-900)',
              fontWeight: 600,
            }}
          >
            Create account
          </a>
        </p>
      </AuthCard>
    </AuthLayout>
  );
}
