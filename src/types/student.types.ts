export interface IStudent {
  id: number;
  full_name: string;
  type: number;
  phone: string;
  institute: {
    id: number;
    name: string;
  };
  contract: number;
  given: number;
  get_status_display: string;
}
