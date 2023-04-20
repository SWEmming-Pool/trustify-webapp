import { Component } from '@angular/core';
import { IconDefinition, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Review } from '../Reviews';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-search-reviews',
  templateUrl: './search-reviews.component.html',
  styleUrls: ['./search-reviews.component.scss'],
})
export class SearchReviewsComponent {
  faSearch: IconDefinition;
  searchQuery: string;
  searchType: string;
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
        this.searchQuery
      );
    } else {
      // searchType === 'receiver'
    }
    this.searched = true;
  }
}
