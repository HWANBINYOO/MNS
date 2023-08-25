export interface BillboardItem {
  date: Date;
  data: [
    {
      name: string;
      artist: string;
      image: string;
      rank: number;
      last_week_rank: number | null;
      peak_rank: number;
      weeks_on_chart: number;
    }
  ];
}
