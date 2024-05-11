import {getData}  from "../api/Renowacja";
import {AdsTop} from "./components/AdsTop";
import AdsBottom from "./components/AdsBottom";
import Hero from "./components/Hero";
import RenovationProces from "./components/RenovationProces";
import Forms from "../../components/Form/form";


export default async function Opinie() {

  const data = await getData();
  const { acf  } = data;

  let formProp = 0;
   
  return (
<>
<Hero acf={acf} />
<AdsTop  acf={acf} />
<RenovationProces proces={acf.process} />
<AdsBottom acf={acf} />
<Forms formProp={formProp} />

</>
  );
  }

        