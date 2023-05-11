import { Review } from './Review';
import { Transaction } from '../transactions/Transaction';
import { ContractService } from 'src/app/services/contract.service';

describe('Review', () => {
  let mockContractService: jasmine.SpyObj<ContractService>;

  beforeEach(() => {
    mockContractService = jasmine.createSpyObj('ContractService', [
      'getTransactionById',
    ]);
  });

  it('should create a Review with default values', () => {
    const review = new Review(mockContractService);
    expect(review.Transaction).toEqual(new Transaction());
    expect(review.Date).toEqual(new Date(0));
    expect(review.Title).toEqual('');
    expect(review.Rating).toEqual(0);
    expect(review.Text).toEqual('');
  });

  it('should create a Review with the specified values', () => {
    const date = new Date();
    const transaction = new Transaction(
      '123',
      date.getTime() / 1000,
      1,
      '0x123',
      '0x456'
    );
    const review = new Review(
      mockContractService,
      date.getTime() / 1000,
      'Test Review',
      4,
      'This is a test review',
      '123'
    );
    review.Transaction = transaction;

    expect(review.Transaction).toEqual(transaction);
    expect(review.Date).toEqual(date);
    expect(review.Title).toEqual('Test Review');
    expect(review.Rating).toEqual(4);
    expect(review.Text).toEqual('This is a test review');
  });
});
