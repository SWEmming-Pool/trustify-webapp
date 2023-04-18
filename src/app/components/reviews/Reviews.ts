import { Transaction } from '../transactions/Transactions';

export class Review {
  transactionId: string;
  date: Date;
  title: string;
  rating: number;
  text: string;

  constructor(
    date: Date = new Date(),
    title: string = '',
    rating: number = 0,
    text: string = '',
    transactionId: string

  ) {
    this.date = date;
    this.title = title;
    this.rating = rating;
    this.text = text;
    this.transactionId = transactionId;

  }
}

/*export const REVIEWS: Review[] = [
  {
    transaction: TRANSACTIONS[0],
    date: new Date('2023-03-24'),
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae.',
  },
  {
    transaction: TRANSACTIONS[1],
    date: new Date('2023-03-22'),
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae',
    rating: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae.',
  },
  {
    transaction: TRANSACTIONS[2],
    date: new Date('2023-02-14'),
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae',
    rating: 4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae.',
  },
  {
    transaction: TRANSACTIONS[3],
    date: new Date('2023-01-24'),
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae',
    rating: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae.',
  },
  {
    transaction: TRANSACTIONS[4],
    date: new Date('2023-02-27'),
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae',
    rating: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae.',
  },
];*/
