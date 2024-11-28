import { getDataOpinionPage } from '../api/Opinie';
import Pagination from './components/Opinie';

export default async function Opinie() {
  const data = await getDataOpinionPage();

  return (
    <>
      <Pagination data={data} />
    </>
  );
}
