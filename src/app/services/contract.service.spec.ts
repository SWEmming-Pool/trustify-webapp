import { TestBed } from '@angular/core/testing';
import { ContractService } from './contract.service';
import { Transaction } from '../components/transactions/Transaction';

describe('ContractService', () => {
  let service: ContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContractService, // Add the service to the providers array
      ],
    });
    service = TestBed.inject(ContractService);
  });

  it('should get unreviewed transactions', async () => {
    // Mock the getUnreviewedTransactions method to return a predefined result
    const expectedResult: Transaction[] = [
      new Transaction('1', 123, 10, '0x36Ac550A5BD2b6a30f52901b3B63ede555F0fdF1', '0x36Ac550A5BD2b6a30f52901b3B63ede555F0fdF1'),
    ];
    const mockResult = ["0x36Ac550A5BD2b6a30f52901b3B63ede555F0fdF1", "0x36Ac550A5BD2b6a30f52901b3B63ede555F0fdF1", "10", "123", "1"];
    spyOn(ContractService.Contract.methods, 'getUnreviewedTransactions').and.returnValue(
      Promise.resolve(mockResult)
    );

    // Call the getUnreviewedTransactions method and verify the result
    const address = '0x1234567890';

    const result = await ContractService.getUnreviewedTransactions(address);

    expect(result).toEqual(expectedResult);
    debugger;
  });
});
