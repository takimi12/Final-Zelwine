import { getData } from "../api/Opinie";
import Pagination from "./components/Pagination"



export default async function Opinie() {
    
    const data = await getData();
   
  return (
    <>
  
      <Pagination data={data} />
    </>
  );
};

