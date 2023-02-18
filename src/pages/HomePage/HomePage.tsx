import { Layout } from '../../components';
import GenerateTimeTableSection from './GenerateTimeTableSection';
import HeroSection from './HeroSection';
import NewsLetterSection from './NewsLetterSection';
import OurValuesSection from './OurValuesSection';
import WhyChooseUs from './WhyChooseUs';

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />

      <GenerateTimeTableSection />

      <OurValuesSection />

      <WhyChooseUs />

      <NewsLetterSection />
    </Layout>
  );
}
