import axios from 'axios';
import Chart from 'src/components/organisms/home';
import { BillboardItemList } from 'src/types/songs';

export default async function Artist100() {
  const charts: BillboardItemList = await fetchChartData();
  return (
    <>
      <Chart charts={charts} category={'Billboard Artist 100'} />
    </>
  );
}

export async function fetchChartData() {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-artist-100/recent.json'
  );
  return data;
}
