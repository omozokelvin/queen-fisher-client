import LockIcon from '../../../public/icons/lock.svg';
import MailIcon from '../../../public/icons/mail-alt.svg';
import PhoneIcon from '../../../public/icons/phone-alt.svg';
import UserIcon from '../../../public/icons/user.svg';
import {
  AuthCard,
  AuthLayout,
  Button,
  SiteLogo,
  TextField,
} from '../../components';

export default function SignupPage() {
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
          Get Started with Queenfisher
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
            label="Full Name"
            placeholder="Type your full name"
            id="fullName"
            name="fullName"
            icon={UserIcon}
          />

          <TextField
            label="Email"
            placeholder="Type your email"
            id="email"
            name="email"
            icon={MailIcon}
            type="email"
          />

          <TextField
            label="Phone Number"
            placeholder="Enter phone number"
            id="phone"
            name="phone"
            icon={PhoneIcon}
            type="tel"
          />

          <TextField
            label="Password"
            placeholder="Enter your password"
            id="password"
            name="password"
            icon={LockIcon}
            type="password"
          />

          <TextField
            label="Confirm Password"
            placeholder="Confirm your password"
            id="confirmPassword"
            name="confirmPassword"
            icon={LockIcon}
            type="password"
          />

          <hr
            style={{
              all: 'unset',
            }}
          />
          <Button>Sign Up</Button>
        </form>

        <p
          style={{
            textAlign: 'center',
            color: 'var(--main-text)',
            fontSize: '0.875rem',
          }}
        >
          Already have an account{' '}
          <a
            href="#"
            style={{
              color: 'var(--orange-900)',
              fontWeight: 600,
            }}
          >
            Login
          </a>
        </p>
      </AuthCard>
    </AuthLayout>
  );
}
