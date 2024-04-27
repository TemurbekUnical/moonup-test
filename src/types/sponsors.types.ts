interface ISponsor {
  id: number;
  full_name: string;
  phone: string;
  sum: number;
  payment_type: {
    id: number;
    title: string;
  }[];
  firm: string;
  spent: number;
  created_at: string;
  get_status_display: string;
}
