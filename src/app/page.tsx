import axios from 'axios';
import { BillboardItem, BillboardItemList } from 'src/types/songs';

export default async function Home() {
  const charts = await fetchSearchData('a');
  // console.log(charts);

  return <>{/* <Chart charts={charts} category={'Billboard Hot 100'} /> */}</>;
}

export async function fetchSearchData(params: string) {
  try {
    const { data } = await axios.get('https://api.genius.com/search?q=ph1', {
      headers: {
        Authorization: `Bearer KwSpHQnOQZw4Rtpb56GO7F1Azh_0PF471ieAnwv_LUL6OwqLIkoYY4pUjeaW0h5e`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
