import Web3 from 'web3';

export class Transaction {
  id: string;
  date: Date;
  amount: number;
  sender: string;
  receiver: string;

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
}
