export interface Payment {
  id: string;
  date: Date;
  amount: number;
  sender: string;
  receiver: string;
}

export const PAYMENTS: Payment[] = [
  {
    id: '1',
    date: new Date('2019-01-01'),
    amount: 100,
    sender: '0x123abc456def890ghi',
    receiver: '0xghi890def456abc123',
  },
];
