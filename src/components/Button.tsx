import { type ButtonHTMLAttributes, type ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button(props: Props) {
  const { children, ...buttonProps } = props;

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
      {...buttonProps}
    >
      {children}
    </button>
  );
}
