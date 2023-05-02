import { TestBed } from '@angular/core/testing';
import Web3 from 'web3';
import { ContractService } from './contract.service';
import { Transaction } from '../components/transactions/Transaction';

describe('ContractService', () => {
  let service: ContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContractService,
      ],
    });

    // Mock the getUnreviewedTransactions method
    spyOn(ContractService.Contract.methods, 'getUnreviewedTransactions').and.returnValue({
      call: (callback: any) => {
        callback(null, [
          ["0x36Ac550A5BD2b6a30f52901b3B63ede555F0fdF1", "0x36Ac550A5BD2b6a30f52901b3B63ede555F0fdF1", "10", "123", "1"]
        ]);
      }
    });

    // Get the instance of the ContractService
    service = TestBed.inject(ContractService);
  });

  it('should return an array of transactions', async () => {
    // Arrange
    const address = '0x1234567890abcdef';

    // Act
    const result = await ContractService.getUnreviewedTransactions(address);

    // Assert
    const arr: Transaction[] = [new Transaction("1", 123, 10, "0x36Ac550A5BD2b6a30f52901b3B63ede555F0fdF1", "0x36Ac550A5BD2b6a30f52901b3B63ede555F0fdF1")];
    expect(result).toEqual(arr);
  });
});
