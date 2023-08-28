export interface SearchDataType {
  meta: {
    status: number;
  };
  response: {
    hits: SearchHit[];
  };
}

export interface SearchHit {
  index: string;
  type: string;
  result: {
    annotation_count: number; //주석개수
    api_path: string; // ex) /songs/5889286
    artist_names: string;
    full_title: string;
    header_image_thumbnail_url: string;
    header_image_url: string;
    id: number;
    lyrics_owner_id: number;
    lyrics_state: string;
    path: string; // ex) /Jay-park-ph-1-sik-k-big-naughty-trade-l-haon-woodie-gochild-the-purge-lyrics
    pyongs_count: number;
    relationships_index_url: string; // 관계 색인 URL
    primary_artist: {
      api_path: string;
      header_image_url: string;
      id: number;
      image_url: string;
      name: string;
      url: string;
    };
  };
}

export interface SearchItemType {
  profileImg: string;
  name: string;
  id: number;
  apiPath: string;
}
