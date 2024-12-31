import Series from '../../components/series/Series';
import { getAllProducts } from '@/app/api/Produkt';
import Advantages from '../components/Advantages';
import Box from '../../components/Homepage/Box/Box';
import { getDataHomepage  } from '@/app/api/Homepage';
import DesktopSection from '../components/DesktopSection';
import MobileSection from '../components/MobileSection';
import { getDataSeries } from '@/app/api/Series';
import { getInfoBox } from '@/app/api/Modals';
import Modals from '../components/Modals';

export default async function ProductPageSingle({
  params,
}: {
  params: { name: string };
}) {

  
  const data = await getDataHomepage ();
  const { acf } = data;
  const res = params.name;
  const lastSegment = params.name;

  const series = await getDataSeries();

  const responsemobile = await getAllProducts(res);
  const responseModal = await getInfoBox(res);

  return (
    <>
      <DesktopSection res={res} responseModal={responseModal} />
      <MobileSection
        responsemobile={responsemobile}
        responseModal={responseModal}
      />
      <Box data={acf.box} />
      <Modals responseModal={responseModal} />
      <Advantages parameter={lastSegment} />
      <Series filtereddataSeries='' series={series} series1='' />
    </>
  );
}
