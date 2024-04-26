
import Image from "next/image";
import {getData}  from "../api/Renowacja";
import styles from "./Renovation.module.scss";
import Link from "next/link";
import {AdsTop} from "./components/AdsTop";
import AdsBottom from "./components/AdsBottom";
import Hero from "./components/Hero";
import RenovationProces from "./components/RenovationProces";
import Form from "./components/Form";


export default async function Opinie() {

  const data = await getData();
  const { acf  } = data;

   
  return (
<>
<Hero acf={acf} />
<AdsBottom acf={acf} />
<AdsTop  acf={acf} />
<RenovationProces proces={acf.process} />
<Form />
</>
  );
  }

        