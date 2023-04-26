import { Component } from '@angular/core';
import { IconDefinition, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Review } from '../Review';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-search-reviews',
  templateUrl: './search-reviews.component.html',
  styleUrls: ['./search-reviews.component.scss'],
})
export class SearchReviewsComponent {
  faSearch: IconDefinition;
  searchQuery: string;
  searchType: 'sender' | 'receiver';
  reviews: Review[];
  searched: boolean;

  constructor(private contractService: ContractService) {
    this.faSearch = faSearch;
    this.searchQuery = '';
    this.searchType = 'sender';
    this.reviews = [];
    this.searched = false;
  }

  async onSubmit() {
    if (this.searchType === 'sender') {
      this.reviews = await this.contractService.getReviewsForAddress(
        'sender',
        this.searchQuery
      );
    } else {
      this.reviews = await this.contractService.getReviewsForAddress(
        'receiver',
        this.searchQuery
      );
    }
    this.searched = true;
  }
}
