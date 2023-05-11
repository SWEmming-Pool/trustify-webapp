// Import the necessary modules
import { ContractService } from './contract.service';
import { Transaction } from '../components/transactions/Transaction';
import { TestBed } from '@angular/core/testing';

// Define the test suite
describe('ContractService', () => {
  let service: ContractService;

  beforeEach(() => {
    // Create the TestBed
    TestBed.configureTestingModule({
      providers: [ContractService],
    });

    // Inject the service and create a mock of the Contract object
    service = TestBed.inject(ContractService);
    service.Contract = jasmine.createSpyObj('Contract', ['methods']);
  });

  it('should return an array of unreviewed transactions', async () => {
    // Define the expected result
    const expected: Transaction[] = [
      new Transaction(
        '0x3333333333333333333333333333333333333333',
        0,
        0,
        '0x1111111111111111111111111111111111111111',
        '0x2222222222222222222222222222222222222222'
      ),
      new Transaction(
        '0x5555555555555555555555555555555555555555',
        0,
        0,
        '0x1111111111111111111111111111111111111111',
        '0x4444444444444444444444444444444444444444'
      ),
    ];

    service.getUnreviewedTransactions = jasmine
      .createSpy('getUnreviewedTransactions')
      .withArgs('0x1111111111111111111111111111111111111111')
      .and.returnValue(
        expected.map(
          (t) =>
            new Transaction(
              t.Id,
              t.Date.getTime(),
              t.Amount,
              t.Sender,
              t.Receiver
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

  /*it('should get transaction by id', async () => {
    const id = '1';
    const transaction = {
      id: '1',
      date: '2022-01-01',
      amount: '10',
      sender: '0x1111111111111111111111111111111111111111',
      receiver: '0x1234567890123456789012345678901234567890',
    };
    const getTransactionByIdSpy = spyOn(
      service.Contract.methods,
      'getTransactionById'
    ).and.returnValue(Promise.resolve(transaction));

    const result = await service.getTransactionById(id);

    expect(getTransactionByIdSpy).toHaveBeenCalledWith(id);
    expect(result.Id).toBe('1');
    expect(result.Date).toBe('2022-01-01');
    expect(result.Amount).toBe(10);
    expect(result.Sender).toBe('0x1111111111111111111111111111111111111111');
    expect(result.Receiver).toBe('0x1234567890123456789012345678901234567890');
  });

  it('should send transaction', async () => {
    const receiverAddress = '0x1234567890123456789012345678901234567890';
    const amount = 10;
    const sendTransactionSpy = spyOn(
      service.Contract.methods,
      'sendTransaction'
    ).and.returnValue(Promise.resolve());

    authServiceSpy.getAccount.and.returnValue(
      '0x1111111111111111111111111111111111111111'
    );

    await service.sendTransaction(receiverAddress, amount);

    expect(sendTransactionSpy).toHaveBeenCalledWith(receiverAddress);
    expect(service.Client.eth.defaultAccount).toBe(
      '0x1111111111111111111111111111111111111111'
    );
  });

  it('should add review', async () => {
    const review = {
      title: 'Good',
      rating: 5,
      text: 'I had a good experience',
      date: new Date('2022-01-01'),
      transaction: {
        id: '1',
        date: '2022-01-01',
        amount: 10,
        sender: '0x1111111111111111111111111111111111111111',
        receiver: '0x1234567890123456789012345678901234567890',
      },
    };
    const addReviewSpy = spyOn(
      service.Contract.methods,
      'addReview'
    ).and.returnValue(Promise.resolve());

    authServiceSpy.account = '0x1111111111111111111111111111111111111111';

    await service.addReview(review);

    expect(addReviewSpy).toHaveBeenCalledWith(
      '1',
      'Good',
      5,
      'I had a good experience'
    );
    expect(service.Client.eth.defaultAccount).toBe(
      '0x1111111111111111111111111111111111111111'
    );
  });

  it('should get reviews by sender address', async () => {
    const address = '0x1111111111111111111111111111111111111111';
    const reviews = [
      {
        date: '2022-01-01',
        title: 'Good',
        rating: 5,
        text: 'I had a good experience',
        transactionId: '1',
      },
      {
        date: '2022-01-02',
        title: 'Bad',
        rating: 1,
        text: 'I had a bad experience',
        transactionId: '2',
      },
    ];
    const getReviewsBySenderSpy = spyOn(
      service.Contract.methods,
      'getReviewsBySender'
    ).and.returnValue(Promise.resolve(reviews));

    const result = await service.getReviewsByAddress('sender', address);

    expect(getReviewsBySenderSpy).toHaveBeenCalledWith(address);
    expect(result.length).toBe(2);
    expect(result[0].Date).toBe(new Date('2022-01-01'));
    expect(result[0].Title).toBe('Good');
    expect(result[0].Rating).toBe(5);
    expect(result[0].Text).toBe('I had a good experience');
    expect(result[0].Transaction.Id).toBe('1');
    expect(result[1].Date).toBe(new Date('2022-01-01'));
    expect(result[1].Title).toBe('Bad');
    expect(result[1].Rating).toBe(1);
    expect(result[1].Text).toBe('I had a bad experience');
    expect(result[1].Transaction.Id).toBe('2');
  });

  it('should get reviews by receiver address', async () => {
    const address = '0x1234567890123456789012345678901234567890';
    const reviews = [
      {
        date: '2022-01-01',
        title: 'Good',
        rating: 5,
        text: 'I had a good experience',
        transactionId: '1',
      },
      {
        date: '2022-01-02',
        title: 'Bad',
        rating: 1,
        text: 'I had a bad experience',
        transactionId: '2',
      },
    ];
    const getReviewsByReceiverSpy = spyOn(
      service.Contract.methods,
      'getReviewsByReceiver'
    ).and.returnValue(Promise.resolve(reviews));

    const result = await service.getReviewsByAddress('receiver', address);

    expect(getReviewsByReceiverSpy).toHaveBeenCalledWith(address);
    expect(result.length).toBe(2);
    expect(result[0].Date).toBe(new Date('2022-01-01'));
    expect(result[0].Title).toBe('Good');
    expect(result[0].Rating).toBe(5);
    expect(result[0].Text).toBe('I had a good experience');
    expect(result[0].Transaction.Id).toBe('1');
    expect(result[1].Date).toBe(new Date('2022-01-01'));
    expect(result[1].Title).toBe('Bad');
    expect(result[1].Rating).toBe(1);
    expect(result[1].Text).toBe('I had a bad experience');
    expect(result[1].Transaction.Id).toBe('2');
  });*/
});
