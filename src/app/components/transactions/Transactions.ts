export interface Transaction {
  id: string;
  date: Date;
  amount: number;
  sender: string;
  receiver: string;
}

/*export const TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    date: new Date('2023-03-24'),
    amount: 0.5,
    sender: '0x123abc456def890ghi',
    receiver: '0x123abc456def890ghi',
    receiverName: 'Amazon',
    description: 'Order #123456',
  },
  {
    id: '2',
    date: new Date('2023-03-22'),
    amount: 0.25,
    sender: '0x123abc456def890ghi',
    receiver: '0x123abc456def890ghi',
    receiverName: 'AliExpress',
    description: 'Order #354657',
  },
  {
    id: '3',
    date: new Date('2023-02-14'),
    amount: 2,
    sender: '0x123abc456def890ghi',
    receiver: '0x123abc456def890ghi',
    receiverName: 'Nike',
    description: '#4578 - 2x Nike Air Max 90',
  },
  {
    id: '4',
    date: new Date('2023-01-24'),
    amount: 0.35,
    sender: '0x123abc456def890ghi',
    receiver: '0x123abc456def890ghi',
    receiverName: 'Zalando',
    description: 'Order #53849 Champion tuta',
  },
  {
    id: '5',
    date: new Date('2023-02-27'),
    amount: 1.4,
    sender: '0x123abc456def890ghi',
    receiver: '0x123abc456def890ghi',
    receiverName: 'AliExpress',
    description: 'Order #123456',
  },
];*/
