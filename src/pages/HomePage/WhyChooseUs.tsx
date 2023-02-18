import HealthyLifeStyleIcon from '../../../public/images/healthy-lifestyle.svg';
import HealthyMealsIcon from '../../../public/images/healthy-meals.svg';
import HealthyRecipeIcon from '../../../public/images/healthy-recipe.svg';
import { WhyCard } from '../../components';

export default function WhyChooseUs() {
  return (
    <section
      className="container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBlock: '80px',
      }}
    >
      <h2
        className="heading-2"
        style={{
          color: 'var(--orange-900)',
          marginBottom: '56px',
        }}
      >
        Why Choose Us
      </h2>

      <div style={{ display: 'flex', columnGap: '32px' }}>
        <WhyCard
          icon={HealthyRecipeIcon}
          title="Healthy Recipe"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel commodo dolor. Vivamus eu nunc convallis, finibus arcu quis, ultrices purus."
          backgroundColor="var(--warning-50)"
        />

        <WhyCard
          icon={HealthyLifeStyleIcon}
          title="Healthy Lifestyle"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel commodo dolor. Vivamus eu nunc convallis, finibus arcu quis, ultrices purus."
          backgroundColor="var(--error-50)"
        />

        <WhyCard
          icon={HealthyMealsIcon}
          title="Healthy Meals"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel commodo dolor. Vivamus eu nunc convallis, finibus arcu quis, ultrices purus."
          backgroundColor="var(--success-100)"
        />
      </div>
    </section>
  );
}
