import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function AuthCard(props: Props) {
  const { children } = props;

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        width: '479px',
        padding: '48px',
      }}
    >
      {children}
    </div>
  );
}
