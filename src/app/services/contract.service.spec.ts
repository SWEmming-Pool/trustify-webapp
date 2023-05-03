import { TestBed } from '@angular/core/testing';
import Web3 from 'web3';
import { ContractService } from './contract.service';
import { Transaction } from '../components/transactions/Transaction';

class MockContract {
  static methods = {
    getUnreviewedTransactions: (address: string) => ({
      call: (callback: Function) => {
        const transactions = [

          ["0x403a043ea3d4d894881ff51b0780eeb98fbbca8dfdf270b23b8b778f9d11ea5a", 1683120461, 10, "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"]

        ];
        callback(null, transactions);
      }
    })
  };
}

describe('ContractService', () => {
  let service: ContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContractService,
      ],
    });


  });

  it('should return an array of transactions', async () => {
    // Arrange
    const address = '0x1234567890abcdef';

    ContractService.Contract = MockContract;
    // Act
    const result = await ContractService.getUnreviewedTransactions(address);

    // Assert
    const arr: Transaction[] = [new Transaction("0x403a043ea3d4d894881ff51b0780eeb98fbbca8dfdf270b23b8b778f9d11ea5a", 1683120461, 10, "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4")];
    expect(result).toEqual(arr);
  });
});
