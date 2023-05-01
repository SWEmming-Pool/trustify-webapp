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
    const mockResult: Transaction[] = [
      new Transaction('1', 123, 10, '0x1234567890', '0x1234567890'),
      new Transaction('2', 123, 20, '0x1234567890', '0x1234567890'),
    ];
    spyOn(ContractService.Contract.methods, 'getUnreviewedTransactions').and.returnValue(
      Promise.resolve(mockResult)
    );

    // Call the getUnreviewedTransactions method and verify the result
    const address = '0x1234567890';
    const result = await ContractService.getUnreviewedTransactions(address);
    expect(result).toEqual(mockResult);
  });
});
