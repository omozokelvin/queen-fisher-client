import { useFormik } from 'formik';
import { isValidPhoneNumber } from 'libphonenumber-js/mobile';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
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
import { formatMobile } from '../../utils';

const Schema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string()
    .email('Please provide valid email')
    .required('Email is required'),
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .test(
      'isValidMobileNumber',
      'Please provide a valid Nigerian mobile number',
      (value) => isValidPhoneNumber(value, 'NG')
    ),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), ''], 'Passwords must match'),
});

export default function SignupPage() {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      const payload = { ...values };

      payload.phoneNumber = formatMobile(values.phoneNumber);

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
          Get Started with Queenfisher
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
            label="Full Name"
            placeholder="Type your full name"
            id="fullName"
            icon={UserIcon}
            {...getFieldProps('fullName')}
            error={Boolean(errors?.fullName && touched?.fullName)}
            errorText={touched?.fullName && errors?.fullName}
          />

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
            label="Phone Number"
            placeholder="Enter phone number"
            id="phone"
            icon={PhoneIcon}
            type="tel"
            {...getFieldProps('phoneNumber')}
            error={Boolean(errors?.phoneNumber && touched?.phoneNumber)}
            errorText={touched?.phoneNumber && errors?.phoneNumber}
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

          <TextField
            label="Confirm Password"
            placeholder="Confirm your password"
            id="confirmPassword"
            icon={LockIcon}
            type="password"
            {...getFieldProps('confirmPassword')}
            error={Boolean(errors?.confirmPassword && touched?.confirmPassword)}
            errorText={touched?.confirmPassword && errors?.confirmPassword}
          />

          <hr
            style={{
              all: 'unset',
            }}
          />
          <Button type="submit">Sign Up</Button>
        </form>

        <p
          style={{
            textAlign: 'center',
            color: 'var(--main-text)',
            fontSize: '0.875rem',
          }}
        >
          Already have an account{' '}
          <Link
            to="/auth/login"
            style={{
              color: 'var(--orange-900)',
              fontWeight: 600,
            }}
          >
            Login
          </Link>
        </p>
      </AuthCard>
    </AuthLayout>
  );
}
