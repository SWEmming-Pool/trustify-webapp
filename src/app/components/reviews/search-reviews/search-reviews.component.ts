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

  constructor(private contractService: ContractService) {
    this.faSearch = faSearch;
    this.searchQuery = '';
    this.searchType = 'sender';
    this.reviews = [];
  }

  async onSubmit() {
    this.reviews = await this.contractService.getReviewsForAddress(
      this.searchQuery
    );
  }
}