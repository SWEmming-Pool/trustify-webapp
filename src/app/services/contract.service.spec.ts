// Import the necessary modules
import { ContractService } from './contract.service';
import { Transaction } from '../components/transactions/Transaction';
import { TestBed } from '@angular/core/testing';
import Web3 from 'web3';
import { AuthenticationService } from './authentication.service';
import { Review } from '../components/reviews/Review';

describe('ContractService', () => {
  let service: ContractService;
  let authServiceSpy: jasmine.SpyObj<AuthenticationService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('AuthenticationService', ['getAccount']);
    TestBed.configureTestingModule({
      providers: [
        ContractService,
        { provide: AuthenticationService, useValue: spy },
      ],
    });
    service = TestBed.inject(ContractService);
    authServiceSpy = TestBed.inject(
      AuthenticationService
    ) as jasmine.SpyObj<AuthenticationService>;
  });

  it('should return an array of unreviewed transactions', async () => {
    // Define the expected result
    const expected: Transaction[] = [
      new Transaction(
        '0x3333333333333333333333333333333333333333',
        new Date(2021, 0, 1).getTime() / 1000,
        parseInt(Web3.utils.toWei('1', 'ether')),
        '0x1111111111111111111111111111111111111111',
        '0x2222222222222222222222222222222222222222'
      ),
      new Transaction(
        '0x5555555555555555555555555555555555555555',
        new Date(2021, 0, 1).getTime() / 1000,
        parseInt(Web3.utils.toWei('1', 'ether')),
        '0x1111111111111111111111111111111111111111',
        '0x4444444444444444444444444444444444444444'
      ),
    ];

    service.getUnreviewedTransactions = jasmine
      .createSpy('getUnreviewedTransactions')
      .withArgs('0x1111111111111111111111111111111111111111')
      .and.returnValue(
        expected.map(
          (t: any) =>
            new Transaction(
              t.id,
              t.date / 1000,
              //BOH
              parseInt(Web3.utils.toWei('1', 'ether')),
              t.sender,
              t.receiver
            )
        )
      );

    // Call the method being tested
    const result = await service.getUnreviewedTransactions(
      '0x1111111111111111111111111111111111111111'
    );

    // Expect the result to match the expected value
    expect(result).toEqual(expected);
  });

  it('should get transaction by id', async () => {
    console.log('test');
    const expected = new Transaction(
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      0,
      0,
      '0x1111111111111111111111111111111111111111',
      '0x2222222222222222222222222222222222222222'
    );

    service.getTransactionById = jasmine
      .createSpy('getTransactionById')
      .withArgs(
        '0x0000000000000000000000000000000000000000000000000000000000000000'
      )
      .and.returnValue(expected)
      .and.rejectWith(new Error('Transaction not found'));

    const result = await service.getTransactionById(
      '0x0000000000000000000000000000000000000000000000000000000000000000'
    );

    expect(result).toBe(expected);
  });

  it('should send a transaction', async () => {
    const receiverAddress = '0x1234567890123456789012345678901234567890';
    const amount = 1;

    const sendSpy = spyOn(
      service.Contract.methods,
      'sendTransaction'
    ).and.returnValue({
      send: () => Promise.resolve(),
    });

    await service.sendTransaction(receiverAddress, amount);

    expect(sendSpy).toHaveBeenCalledWith(receiverAddress);
  });

  it('should throw an error if review is invalid', async () => {
    const invalidReview = new Review(
      service,
      0,
      'This is a title that is way too long and should trigger an error',
      6,
      '',
      '0x0000000000000000000000000000000000000000000000000000000000000000'
    );

    const sendSpy = spyOn(
      service.Contract.methods,
      'addReview'
    ).and.returnValue({
      send: () => Promise.resolve(),
    });

    try {
      await service.addReview(invalidReview);
      fail('Expected an error to be thrown');
    } catch (error: any) {
      expect(error.message).toEqual('Invalid review');
      expect(sendSpy).not.toHaveBeenCalled();
    }
  });

  it('should add a review', async () => {
    const validReview = new Review(
      service,
      0,
      'This is a valid title',
      5,
      'This is a valid review',
      '0x1234567890123456789012345678901234567890'
    );

    const sendSpy = spyOn(
      service.Contract.methods,
      'addReview'
    ).and.returnValue({
      send: () => Promise.resolve(),
    });

    await service.addReview(validReview);

    expect(sendSpy).toHaveBeenCalledWith(
      validReview.Transaction.Id,
      validReview.Title,
      validReview.Rating,
      validReview.Text
    );
  });
});
