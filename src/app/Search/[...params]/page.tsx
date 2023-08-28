import axios from 'axios';

export default async function BillboardSearch({
  params: { params },
}: {
  params: { params: string };
}) {
  const charts = await fetchSearchData(params);
  console.log(charts);

  return (
    <>
      <p>hi</p>
    </>
  );
}

export async function fetchSearchData(params: string) {
  try {
    const { data } = await axios.get('https://api.genius.com/search?q=ph1', {
      headers: {
        Authorization: `Bearer KwSpHQnOQZw4Rtpb56GO7F1Azh_0PF471ieAnwv_LUL6OwqLIkoYY4pUjeaW0h5e`,
      },
    });
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}
