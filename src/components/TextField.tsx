import { type InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: string;
  error?: boolean;
  errorText?: string | boolean;
}

export default function TextField(props: Props) {
  const {
    label,
    icon,
    error = false,
    errorText = '',
    ...theRestInputAttributes
  } = props;

  const id = theRestInputAttributes?.id ?? '';

  return (
    <fieldset
      style={{
        all: 'unset',
      }}
    >
      <label
        htmlFor={id}
        style={{
          color: error ? 'red' : 'var(--darker-gray)',
          fontWeight: 600,
          fontSize: '0.875rem',
          marginBottom: '8px',
          display: 'inline-block',
        }}
      >
        {label}
      </label>

      <div
        style={{
          borderRadius: '6px',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: error ? 'red' : 'var(--gray-400)',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          paddingInline: '18.5px',
          columnGap: '10.5px',
        }}
      >
        <img src={icon} alt="mail icon" />

        <div>
          <input
            style={{
              fontSize: '0.875rem',
              lineHeight: '20px',
              color: error ? 'red' : 'var(--gray-600)',
              width: '100%',
              border: 'unset',
            }}
            className={error ? 'error-input' : ''}
            {...theRestInputAttributes}
          />
        </div>
      </div>
      {errorText.trim().length > 0 && (
        <span
          style={{
            color: 'red',
            fontSize: '0.875rem',
          }}
        >
          {errorText}
        </span>
      )}
    </fieldset>
  );
}
