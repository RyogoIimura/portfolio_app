export type ItemType = {
  id: string;
  name: string;
  category: bigint;
  price: string;
  capacity: bigint | null;
  maximum_temperature: string | null;
  created_at: Date;
  updated_at: Date;
}
