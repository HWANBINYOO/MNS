export interface ArtistDataType {
  meta: {
    status: number;
  };
  response: {
    artist: ArtistDetail;
  };
}

export interface ArtistDetail {
  alternate_names: string[];
  api_path: string; // ex) /songs/5889286
  header_image_url: string;
  image_url: string;
  id: number;
  name: string;
}
