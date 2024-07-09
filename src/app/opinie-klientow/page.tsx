import Image from "next/image";
import styles from "./Opinie.module.scss";
import { getData } from "../api/Opinie";
import Pagination from "./components/page"



export default async function Opinie() {
    
    const data = await getData();
   
  return (
    <>
  
      <Pagination data={data} />
    </>
  );
};

