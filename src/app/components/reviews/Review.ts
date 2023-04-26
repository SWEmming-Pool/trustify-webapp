export class Review {
  transactionId: string;
  date: Date;
  title: string;
  rating: number;
  text: string;

  constructor(
    date: number = 0,
    title: string = '',
    rating: number = 4,
    text: string = '',
    transactionId: string

  ) {
    this.date = new Date(date * 1000);
    this.title = title;
    this.rating = rating;
    this.text = text;
    this.transactionId = transactionId;
  }
}
