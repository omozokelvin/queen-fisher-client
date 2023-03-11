import Food2 from '../../../public/images/food-2.svg';
import { Stats } from '../../components';
import classes from './GenerateTimeTableSection.module.css';

export default function GenerateTimeTableSection() {
  return (
    <section className={`container ${classes.content}`}>
      <img src={Food2} alt="Bunch of food items" />

      <div className={classes['right-side']}>
        <h2 className="heading-1">Generate Timetables With Ease</h2>

        <p className="body-1">
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel commodo dolor. Vivamus eu nunc convallis, finibus arcu quis, ultrices purus.`}
        </p>

        <p>
          In maximus interdum finibus. Praesent vestibulum justo ipsum, quis
          porttitor nibh porttitor tincidunt.
        </p>

        <div style={{ display: 'flex', columnGap: '97px' }}>
          <Stats title="Member active" count={2300} />
          <Stats title="Happy Clients" count={10100} />
        </div>
      </div>

      {/* <img
        src={Pepper}
        alt="Pepper props"
        style={{
          position: 'absolute',
          bottom: 0,
        }}
      /> */}
    </section>
  );
}
