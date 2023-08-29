import axios from 'axios';
import Artist from 'src/components/organisms/Artist';
import Song from 'src/components/organisms/Song';

export default async function SongPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const ArtistData = await fetchSongData(id);
  console.log(ArtistData);

  return (
    <>
      <Artist ArtistData={ArtistData} />
    </>
  );
}

export async function fetchSongData(id: number) {
  try {
    const { data } = await axios.get(`https://api.genius.com/artists/${id}`, {
      headers: {
        Authorization: `Bearer KwSpHQnOQZw4Rtpb56GO7F1Azh_0PF471ieAnwv_LUL6OwqLIkoYY4pUjeaW0h5e`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
