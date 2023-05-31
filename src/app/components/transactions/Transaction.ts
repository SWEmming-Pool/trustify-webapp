import Web3 from 'web3';

export class Transaction {
  private id: string;
  private date: Date;
  private amount: number;
  private sender: string;
  private receiver: string;

  constructor(
    id: string = '',
    date: number = 0,
    amount: number = 0,
    sender: string = '',
    receiver: string = '',
  ) {
    this.id = id;
    this.date = new Date(date * 1000);
    this.amount = parseFloat(Web3.utils.fromWei(amount.toString(), 'ether'));
    this.sender = sender;
    this.receiver = receiver;
  }

  get Id(): string {
    return this.id;
  }

  get Date(): Date {
    return this.date;
  }

  get Amount(): number {
    return this.amount;
  }

  get Sender(): string {
    return this.sender;
  }

  get Receiver(): string {
    return this.receiver;
  }
}
