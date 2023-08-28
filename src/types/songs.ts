export interface BillboardItem {
  name: string;
  artist: string;
  image: string;
  rank: number;
  last_week_rank: number | null;
  peak_rank: number;
  weeks_on_chart: number;
}

export interface BillboardItemList {
  date: Date;
  data: BillboardItem[];
}

export interface isFocusProps {
  isFocus?: boolean;
}
