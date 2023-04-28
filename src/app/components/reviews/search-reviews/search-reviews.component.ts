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

  constructor() {
    this.faSearch = faSearch;
    this.searchQuery = '';
    this.searchType = 'sender';
    this.reviews = [];
    this.searched = false;
  }

  async search() {
    this.searched = true;

    this.reviews = [];

    this.reviews = await ContractService.getReviewsByAddress(
      this.searchType,
      this.searchQuery
    );
  }
}
