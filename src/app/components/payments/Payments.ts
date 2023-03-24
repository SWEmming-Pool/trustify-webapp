export interface Payment {
  id: string;
  date: Date;
  amount: number;
  sender: string;
  receiver: string;
  reviewed: boolean;
}

export const PAYMENTS: Payment[] = [
  {
    id: '1',
    date: new Date('2023-03-24'),
    amount: 100,
    sender: '0x123abc456def890ghi',
    receiver: '0xghi890def456abc123',
    reviewed: false,
  },
  {
    id: '1',
    date: new Date('2023-03-24'),
    amount: 100,
    sender: '0x123abc456def890ghi',
    receiver: '0xghi890def456abc123',
    reviewed: false,
  },
  {
    id: '1',
    date: new Date('2023-03-24'),
    amount: 100,
    sender: '0x123abc456def890ghi',
    receiver: '0xghi890def456abc123',
    reviewed: true,
  },
  {
    id: '1',
    date: new Date('2023-03-24'),
    amount: 100,
    sender: '0x123abc456def890ghi',
    receiver: '0xghi890def456abc123',
    reviewed: false,
  },
  {
    id: '1',
    date: new Date('2023-03-24'),
    amount: 100,
    sender: '0x123abc456def890ghi',
    receiver: '0xghi890def456abc123',
    reviewed: true,
  },
];
