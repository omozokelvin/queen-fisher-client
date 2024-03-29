import { Link } from 'react-router-dom';
import LinkIcon from '../../../public/icons/link-icon.svg';
import FoodTray from '../../../public/images/food-tray.svg';
import classes from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={classes.wrapper}>
      <div className={`container ${classes.content}`}>
        <div className={classes['left-side']}>
          <h2>Make Healthy Life With Queenfisher</h2>

          <p className="body-1">
            {`With Queenfisher, user's can generate meal timetables based on
          preferences such as diet type, health condition, age, budget,
          geography.`}
          </p>

          <Link to="/auth/signup" className="btn-primary">
            Get Started
            <img
              src={LinkIcon}
              style={{
                marginLeft: '11.33px',
              }}
            />
          </Link>
        </div>

        <div className={classes['image-wrapper']}>
          <div className={classes.rectangle} />
          <img src={FoodTray} alt="Food tray" />
        </div>
      </div>
    </section>
  );
}
