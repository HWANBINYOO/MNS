import axios from 'axios';
import Search from 'src/components/organisms/Search';

export default async function BillboardSearch({
  params: { params },
}: {
  params: { params: string };
}) {
  const SearchData = await fetchSearchData(params);

  return (
    <>
      <Search SearchData={SearchData} />
    </>
  );
}

export async function fetchSearchData(params: string) {
  try {
    const { data } = await axios.get(
      `https://api.genius.com/search?q=${params}`,
      {
        headers: {
          Authorization: `Bearer KwSpHQnOQZw4Rtpb56GO7F1Azh_0PF471ieAnwv_LUL6OwqLIkoYY4pUjeaW0h5e`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
