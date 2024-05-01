
import Image from "next/image";
import {getData}  from "../api/Renowacja";
import styles from "./Renovation.module.scss";
import Link from "next/link";
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
<AdsBottom acf={acf} />
<AdsTop  acf={acf} />
<RenovationProces proces={acf.process} />
<Forms formProp={formProp} />

</>
  );
  }

        