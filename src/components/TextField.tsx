import { type HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
  label: string;
  icon: string;
}

export default function TextField(props: Props) {
  const { label, icon, ...theRestInputAttributes } = props;

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
          color: 'var(--darker-gray)',
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
          borderColor: 'var(--gray-400)',
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
              color: 'var(--gray-600)',
              width: '100%',
              border: 'unset',
            }}
            {...theRestInputAttributes}
          />
        </div>
      </div>
    </fieldset>
  );
}
