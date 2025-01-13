import { getDataOpinionPage } from '../api/Opinie';
import Pagination from './components/Opinion';

export default async function Opinie() {
  const data = await getDataOpinionPage();

  return (
    <>
      <Pagination data={data} />
    </>
  );
}
