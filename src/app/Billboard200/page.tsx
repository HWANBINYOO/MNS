import axios from 'axios';
import Chart from 'src/components/organisms/home';
import { BillboardItemList } from 'src/types/songs';

export default async function Billboard200() {
  const charts: BillboardItemList = await fetchChartData();
  return (
    <>
      <Chart charts={charts} category={'Billboard 200'} />
    </>
  );
}

export async function fetchChartData() {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-200/recent.json'
  );
  return data;
}
