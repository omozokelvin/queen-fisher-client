import DeliveryManIcon from '../../../public/images/delivery-man.svg';
import FoodIcon from '../../../public/images/food.svg';
import PartyJollof from '../../../public/images/party-jollof.svg';
import Pepper from '../../../public/images/pepper.svg';
import StallIcon from '../../../public/images/stall.svg';
import Tomato from '../../../public/images/tomato.svg';
import { ValuesChip } from '../../components';
import classes from './OurValuesSection.module.css';

export default function OurValuesSection() {
  return (
    <section className={classes.wrapper}>
      <img
        src={Pepper}
        alt="pepper"
        style={{
          position: 'absolute',
          top: '-90px',
        }}
      />

      <div className={`container ${classes.content}`}>
        <div className={classes['left-side']}>
          <h2 className="heading-1">Our Values that Would Help You</h2>

          <p
            className="body-1"
            style={{
              maxWidth: '460px',
              marginBottom: '24px',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
            commodo dolor. Vivamus eu nunc convallis, finibus arcu quis,
          </p>

          <p
            className="body-1"
            style={{
              maxWidth: '460px',
              marginBottom: '32px',
            }}
          >
            ultrices purus. In maximus interdum finibus. Praesent vestibulum
            justo ipsum, quis porttitor nibh porttitor tincidunt.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '24px',
            }}
          >
            <ValuesChip icon={FoodIcon} title="Good recipe / Ingredients" />

            <ValuesChip
              icon={StallIcon}
              title="Best stores to purchase items"
            />

            <ValuesChip
              icon={DeliveryManIcon}
              title="Fast preparation services"
            />
          </div>
        </div>

        <img src={PartyJollof} alt="Party Jollof" />
      </div>

      <img
        src={Tomato}
        alt="tomatoes"
        style={{
          position: 'absolute',
          bottom: '-90px',
          right: '90px',
        }}
      />
    </section>
  );
}
