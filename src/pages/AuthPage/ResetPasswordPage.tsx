import KeyIcon from '../../../public/icons/key-alt.svg';
import {
  AuthCard,
  AuthLayout,
  Button,
  SiteLogo,
  TextField,
} from '../../components';

export default function ResetPasswordPage() {
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
          Reset Password
        </h1>

        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '16px',
          }}
        >
          <TextField
            label="Password"
            placeholder="Enter your new password"
            id="password"
            name="password"
            icon={KeyIcon}
            type="password"
          />

          <TextField
            label="Confirm Password"
            placeholder="Confirm password"
            id="confirmPassword"
            name="confirmPassword"
            icon={KeyIcon}
            type="password"
          />

          <hr
            style={{
              all: 'unset',
            }}
          />
          <Button>Reset Password</Button>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
