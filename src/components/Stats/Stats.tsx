import classes from './Stats.module.css';

const formatAsNumber = (number: number) => {
  return new Intl.NumberFormat('en-GB', {
    notation: 'compact',
    maximumFractionDigits: 0,
  }).format(number);
};

interface Props {
  count: number;
  title: string;
}

export default function Stats(props: Props) {
  const { count, title } = props;

  return (
    <div className={classes.wrapper}>
      <h3 className="heading-1">{formatAsNumber(count)}+</h3>
      <p className="body-1">{title}</p>
    </div>
  );
}
