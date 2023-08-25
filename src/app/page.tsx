import Chart from 'src/components/home';
import { BillboardItem } from 'src/types/songs';

export default async function Home() {
  const charts: BillboardItem[] = await fetchChartData();
  console.log(charts);
  return (
    <>
      {/* {charts} */}
      <Chart />
    </>
  );
}

export async function fetchChartData() {
  const res = await fetch(
    'https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json'
  );
  const data = await res.json();
  return data;
}
