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
          Authorization: `Bearer ZZOIodyVils4SKFDmfQ6QqI0kU3Wral2hFbk610Ijb_49gvDl9lcxd0fqG5euz3G`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
