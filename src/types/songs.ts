export interface SongDataType {
  meta: {
    status: number;
  };
  response: {
    song: SongDetail;
  };
}

export interface SongDetail {
  annotation_count: number; //주석개수
  api_path: string; // ex) /songs/5889286
  apple_music_id: number;
  apple_music_player_url: string;
  artist_names: string;
  embed_content: string;
  full_title: string;
  header_image_thumbnail_url: string;
  header_image_url: string;
  id: number;
  lyrics_owner_id: number;
  lyrics_state: string;
  title: string;
  release_date: Date;
  path: string; // ex) /Jay-park-ph-1-sik-k-big-naughty-trade-l-haon-woodie-gochild-the-purge-lyrics
  pyongs_count: number;
  media: SongMedia[];
  primary_artist: {
    api_path: string;
    header_image_url: string;
    id: number;
    image_url: string;
    name: string;
    url: string;
  };
}

export interface SongMedia {
  provider: string;
  start: number;
  type: string;
  url: string;
}
