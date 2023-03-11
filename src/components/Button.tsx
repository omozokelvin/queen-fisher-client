import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Button(props: Props) {
  const { children } = props;

  return (
    <button
      style={{
        backgroundColor: 'var(--orange-900)',
        color: '#FFFFFF',
        height: '44px',
        paddingBlock: '12px',
        paddingInline: '16px',
        borderRadius: '6px',
        fontWeight: 600,
        fontSize: '0.875rem',
      }}
    >
      {children}
    </button>
  );
}
