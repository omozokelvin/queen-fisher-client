import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import LockIcon from '../../../public/icons/lock.svg';
import MailIcon from '../../../public/icons/mail-alt.svg';
import {
  AuthCard,
  AuthLayout,
  Button,
  SiteLogo,
  TextField,
} from '../../components';

const Schema = Yup.object().shape({
  email: Yup.string()
    .email('Please provide valid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

export default function LoginPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      const payload = { ...values };

      alert(JSON.stringify(payload, null, 2));
    },
  });

  const { handleSubmit, getFieldProps, errors, touched } = formik;

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
          onSubmit={handleSubmit}
        >
          <TextField
            label="Email"
            placeholder="Type your email"
            id="email"
            icon={MailIcon}
            type="email"
            {...getFieldProps('email')}
            error={Boolean(errors?.email && touched?.email)}
            errorText={touched?.email && errors?.email}
          />

          <TextField
            label="Password"
            placeholder="Enter your password"
            id="password"
            icon={LockIcon}
            type="password"
            {...getFieldProps('password')}
            error={Boolean(errors?.password && touched?.password)}
            errorText={touched?.password && errors?.password}
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
          <Button type="submit">Login</Button>
        </form>

        <p
          style={{
            textAlign: 'center',
            color: 'var(--main-text)',
            fontSize: '0.875rem',
          }}
        >
          Don’t have an account?{' '}
          <Link
            to="/auth/signup"
            style={{
              color: 'var(--orange-900)',
              fontWeight: 600,
            }}
          >
            Create account
          </Link>
        </p>
      </AuthCard>
    </AuthLayout>
  );
}
