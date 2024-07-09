import {getData}  from "../api/Renowacja";
import {AdsTop} from "./components/AdsTop";
import AdsBottom from "./components/AdsBottom";
import Hero from "./components/Hero";
import RenovationProces from "./components/RenovationProces";
import Form from "../kontakt/components/Form"


export default async function Opinie() {

  const data = await getData();
  const { acf  } = data;

   
  return (
<>
<Hero acf={acf} />
<AdsTop  acf={acf} />
<RenovationProces proces={acf.process} />
<AdsBottom acf={acf} />
<Form  contact={0}/>


</>
  );
  }

        