import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function AuthLayout(props: Props) {
  return (
    <section
      style={{
        backgroundColor: 'var(--auth-bg)',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '48px',
        rowGap: '56px',
      }}
    >
      {props.children}
    </section>
  );
}
