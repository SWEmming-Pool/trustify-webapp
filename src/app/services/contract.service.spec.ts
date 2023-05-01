import { TestBed } from '@angular/core/testing';
import Web3 from 'web3';
import { Transaction } from '../components/transactions/Transaction';
import { AuthenticationService } from './authentication.service';
import { Review } from '../components/reviews/Review';
import { ContractService } from './contract.service';

describe('ContractService', () => {
  let service: ContractService;
  let client: Web3;
  let contract: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContractService);
    client = new Web3(ContractService.INFURA_RPC);
    contract = new client.eth.Contract(
      ContractService.CONTRACT_JSON,
      ContractService.CONTRACT_ADDRESS
    );
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of unreviewed transactions for a given address', (done) => {
    const address = '0x36Ac550A5BD2b6a30f52901b3B63ede555F0fdF1'; // set a test address here

    spyOn(contract.methods, 'getUnreviewedTransactions').and.returnValue(
      Promise.resolve([
        {
          id: '1',
          date: 1682874399,
          amount: 10,
          sender: '0x36Ac550A5BD2b6a30f52901b3B63ede555F0fdF1',
          receiver: '0x36Ac550A5BD2b6a30f52901b3B63ede555F0fdF1',
        },
        {
          id: '2',
          date: 1682874399,
          amount: 20,
          sender: '0x36Ac550A5BD2b6a30f52901b3B63ede555F0fdF1',
          receiver: '0x36Ac550A5BD2b6a30f52901b3B63ede555F0fdF1',
        },
      ])
    );
    debugger;
    ContractService.getUnreviewedTransactions(address).then((result) => {
      expect(result).toEqual([
        new Transaction('1', 1682874399, 10, '0x36Ac550A5BD2b6a30f52901b3B63ede555F0fdF1', '0x36Ac550A5BD2b6a30f52901b3B63ede555F0fdF1'),
        new Transaction('2', 1682874399, 20, '0x36Ac550A5BD2b6a30f52901b3B63ede555F0fdF1', '0x36Ac550A5BD2b6a30f52901b3B63ede555F0fdF1'),
      ]);
      done();
    });
  });
});
