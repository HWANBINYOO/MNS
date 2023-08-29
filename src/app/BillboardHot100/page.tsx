import axios from 'axios';
import Chart from 'src/components/organisms/home';
import { SongDataType } from 'src/types/songs';

export default async function BillboardHot100() {
  const charts: SongDataType = await fetchChartData();
  return (
    <>
      <Chart charts={charts} category={'Billboard Hot 100'} />
    </>
  );
}

export async function fetchChartData() {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json'
  );
  return data;
}
