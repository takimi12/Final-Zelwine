import Series from "../../../components/series/Series"
import { getProducts } from '@/app/api/Produkt';
import Advantages from "../components/Advantages";
import Box from "../../../components/Homepage/Box/page"
import { getData } from "@/app/api/Homepage";
import DesktopSection from "../components/DesktopSection";
import MobileSection from "../components/MobileSection";


export default async function ProductPageSingle({ params }: { params: { name: any } }) {


  const data = await getData();
  const { acf } = data;
  const res =params.name 
  let lastSegment = params.name;


  const responsemobile = await getProducts(res);
  return (
    <>
      <DesktopSection  res={res} /> 
      <MobileSection  responsemobile={responsemobile} />
      {/* <Box data={acf.box} /> */}
      <Advantages  params={lastSegment}/>
      {/* <Series  filtereddataSeries="" /> */}

    </>
  );
};
