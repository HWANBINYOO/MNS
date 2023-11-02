import axios from 'axios';
import Chart from 'src/components/organisms/home';
import { BillboardItemList } from 'src/types/billboard';

export default async function BillboardGlobal200() {
  const charts: BillboardItemList = await fetchChartData();
  return (
    <>
      <Chart charts={charts} category={'Billboard Global 200'} />
    </>
  );
}

export async function fetchChartData() {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-global-200/recent.json'
  );
  return data;
}
