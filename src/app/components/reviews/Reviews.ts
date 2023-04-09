import { transaction, TRANSACTIONS } from "../transactions/Transactions";

export interface Review {
  transaction: transaction;
  date: Date;
  rating: number;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    transaction: TRANSACTIONS[0],
    date: new Date('2023-03-24'),
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae.',
  },
  {
    transaction: TRANSACTIONS[1],
    date: new Date('2023-03-22'),
    rating: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae.',
  },
  {
    transaction: TRANSACTIONS[2],
    date: new Date('2023-02-14'),
    rating: 4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae.',
  },
  {
    transaction: TRANSACTIONS[3],
    date: new Date('2023-01-24'),
    rating: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae.',
  },
  {
    transaction: TRANSACTIONS[4],
    date: new Date('2023-02-27'),
    rating: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae.',
  },
];
