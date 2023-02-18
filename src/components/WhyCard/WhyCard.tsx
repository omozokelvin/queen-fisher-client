import { type CSSProperties } from 'react';

interface Props {
  icon: string;
  title: string;
  description: string;
  backgroundColor: CSSProperties['backgroundColor'];
}
export default function WhyCard(props: Props) {
  const { icon, title, description, backgroundColor } = props;

  return (
    <div
      style={{
        maxWidth: '342px',
        minHeight: '374px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor,
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
        borderRadius: '32px',
        paddingBlock: '24px',
        paddingInline: '30px',
      }}
    >
      <img src={icon} alt={title} style={{ marginBottom: '24px' }} />

      <h3
        style={{
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '140%',
          marginBottom: '32px',
          textAlign: 'center',
        }}
      >
        {title}
      </h3>
      <p
        className="body-1"
        style={{
          maxWidth: '283px',
          textAlign: 'center',
        }}
      >
        {description}
      </p>
    </div>
  );
}
