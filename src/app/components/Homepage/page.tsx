import { getDataHomepage } from '@/app/api/Homepage';
import Hero from './Hero/Hero';
import Most from './MostPopular/MostPopular';
import Inspiration from './Inspiration/Inspiration';
import Series from '../series/Series';
import Boxes from './Box/Box';
import RenovationSection from './Renovation/Renovation';
import Opinion from './Opinion/Opinion';
import Featured from './Featured/Featured';
import { getDataSeries } from '@/app/api/Series';

export default async function HomeLayout() {
  const data = await getDataHomepage();
  const series = await getDataSeries();

  const { acf } = data;

  return (
    <>
      <Hero data={acf.hero} />
      <Most data={acf.most} />
      <Series series={series} series1='' filtereddataSeries='' />
      <Inspiration data={acf.inspirations} />
      <Boxes data={acf.box} />
      <RenovationSection data={acf.image_with_text} />
      <Opinion data={acf.opinion} />
      <Featured data={acf.last_block_homepage} />
    </>
  );
}
