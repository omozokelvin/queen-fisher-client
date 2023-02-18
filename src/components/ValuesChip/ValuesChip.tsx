interface Props {
  icon: string;
  title: string;
}

export default function ValuesChip(props: Props) {
  const { icon, title } = props;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        columnGap: '24px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 4px 16px 4px rgba(0, 0, 0, 0.04)',
        borderRadius: '100px',
        maxWidth: '464px',
        minHeight: '56px',
        paddingInline: '30px',
      }}
    >
      <img src={icon} alt={title} />

      <p className="body-1">{title}</p>
    </div>
  );
}
