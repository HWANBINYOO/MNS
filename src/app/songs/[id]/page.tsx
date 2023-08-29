import axios from 'axios';
import Song from 'src/components/organisms/Song';

export default async function SongPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const SongData = await fetchSongData(id);

  return (
    <>
      <Song SongData={SongData} />
    </>
  );
}

export async function fetchSongData(id: number) {
  try {
    const { data } = await axios.get(`https://api.genius.com/songs/${id}`, {
      headers: {
        Authorization: `Bearer KwSpHQnOQZw4Rtpb56GO7F1Azh_0PF471ieAnwv_LUL6OwqLIkoYY4pUjeaW0h5e`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
